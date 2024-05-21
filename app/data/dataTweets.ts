'use server'

import { db } from "./db";
import { Tweet, TweetWithAdditionalData } from "./types";

export async function getTweets(userId: number): Promise<TweetWithAdditionalData[]> {
    try {
        const tweets = await db.query(`

        SELECT 
            p.name AS author_name, p.handle AS author_handle, t.*,
            CASE WHEN f.user_id = t.user_id THEN TRUE ELSE FALSE END AS is_own_tweet,
            CASE WHEN b.bookmarked_tweet IS NOT NULL THEN TRUE ELSE FALSE END AS is_bookmarked,
            CASE WHEN l.liked_tweet IS NOT NULL THEN TRUE ELSE FALSE END AS is_liked
        FROM follows f
        JOIN tweets t ON f.following = t.user_id
        JOIN profile p ON f.following = p.id
        LEFT JOIN bookmarks b ON b.user_id = f.user_id AND b.bookmarked_tweet = t.id
        LEFT JOIN likes l ON l.user_id = f.user_id AND l.liked_tweet = t.id
        WHERE f.user_id = ${userId}

        UNION   

        SELECT 
            p.name AS author_name, p.handle AS author_handle, t.*,
            TRUE AS is_own_tweet, 
            FALSE AS is_bookmarked,
            FALSE AS is_liked
        FROM profile p
        JOIN tweets t ON p.id = t.user_id
        WHERE p.id = ${userId}

        ORDER BY created_at DESC;
                
        `).then(res => res.rows);
        return tweets;
    } catch (error) {
        console.log('Database Error:', error);
        throw Error('Failed to get tweets.');
    }
}

export async function getTweetsByUser(ownHandle: string, handle: string): Promise<Tweet[]> {
    try {
        const tweets = await db.query(`
            SELECT
                p.name AS author_name, p.handle AS author_handle, t.content, t.created_at, t.image, t.location, t.id,
                CASE WHEN l.user_id IS NOT NULL THEN TRUE ELSE FALSE END AS is_liked,
                CASE WHEN b.user_id IS NOT NULL THEN TRUE ELSE FALSE END AS is_bookmarked
            FROM
                profile p
                JOIN tweets t ON p.id = t.user_id
                LEFT JOIN bookmarks b ON b.user_id = (SELECT id FROM profile WHERE handle = '${ownHandle}') AND t.id = b.bookmarked_tweet
                LEFT JOIN likes l ON l.user_id = (SELECT id FROM profile WHERE handle = '${ownHandle}') AND t.id = l.liked_tweet
            WHERE
                p.handle = '${handle}'
            ORDER BY
                t.created_at DESC; `).then(res => res.rows);
        return tweets;
    } catch (error) {
        console.log('Database Error:', error);
        throw Error('Failed to get tweets.');
    }
}

export async function getTweetById(tweetId: number, userId: number): Promise<TweetWithAdditionalData> {
    try {
        const tweet = await db.query(`
        SELECT t.*, p.handle AS author_handle, p.name AS author_name,
        CASE WHEN b.user_id IS NOT NULL THEN TRUE ELSE FALSE END AS is_bookmarked,
        CASE WHEN l.user_id IS NOT NULL THEN TRUE ELSE FALSE END AS is_liked,
        CASE WHEN ${userId} = t.user_id THEN TRUE ELSE FALSE END AS is_own_tweet
        FROM tweets t
        JOIN profile p ON t.user_id = p.id
        LEFT JOIN bookmarks b ON b.user_id = ${userId} AND b.bookmarked_tweet = t.id
        LEFT JOIN likes l ON l.user_id = ${userId} AND l.liked_tweet = t.id
        WHERE t.id = ${tweetId};
        `).then(res => res.rows[0]);
        return tweet;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get tweet.')
    }
}
export async function getBookMarkedTweets(userId: number): Promise<TweetWithAdditionalData[]> {

    try {
        const res = await db.query(`

        SELECT
            p.name AS author_name, p.handle AS author_handle,
            t.content, t.created_at, t.image, t.location, t.id,
            FALSE AS is_own_tweet, TRUE AS is_bookmarked
        FROM bookmarks b
        JOIN tweets t ON b.bookmarked_tweet = t.id
        JOIN profile p ON t.user_id = p.id
        WHERE b.user_id = ${userId};
        `).then(res => res.rows);
        return res;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get tweet.')
    }
}