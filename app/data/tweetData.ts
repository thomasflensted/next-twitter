'use server'

import { db } from "./db";
import { Tweet } from "./types";

export async function getTweets(userId: number): Promise<Tweet[]> {
    try {
        const tweets = await db.query(`

        SELECT 
            p.name, p.handle, t.content, t.created_at, t.image, p.location, t.id,
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
            p.name, p.handle, t.content, t.created_at, t.image, t.location, t.id,
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
            SELECT p.name, p.handle, t.content, t.created_at, t.image, t.location, t.id, 
            CASE WHEN p.handle = '${ownHandle}' THEN TRUE ELSE FALSE END AS is_own_tweet
            FROM profile p
            JOIN tweets t ON p.id = t.user_id
            WHERE p.handle = '${handle}'
            ORDER BY created_at DESC;
            `).then(res => res.rows);
        return tweets;
    } catch (error) {
        console.log('Database Error:', error);
        throw Error('Failed to get tweets.');
    }
}

export async function getTweetById(id: number): Promise<Tweet> {
    try {
        const res = await db.query(`
        SELECT tweets.content, tweets.location, tweets.created_at, tweets.image, profile.name, profile.handle
        FROM tweets
        JOIN profile ON profile.kinde_id = tweets.user_id
        WHERE tweets.id = 52;`);
        return res.rows[0];
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get tweet.')
    }
}
export async function getBookMarkedTweets(userId: number): Promise<Tweet[]> {
    try {
        const res = await db.query(`

        SELECT
            p.name,
            p.handle,
            t.content,
            t.created_at,
            t.image,
            t.location,
            t.id,
            FALSE AS is_own_tweet,
            TRUE AS is_bookmarked
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