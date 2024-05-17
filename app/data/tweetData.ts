'use server'

import { db } from "./db";
import { Tweet } from "./types";

export async function getTweets(userId: number): Promise<Tweet[]> {
    try {
        const tweets = await db.query(`

        SELECT p.name, p.handle, t.content, t.created_at, t.image, t.location, t.id, 
        CASE WHEN f.user_id = p.id THEN TRUE ELSE FALSE END AS is_own_tweet
        FROM follows f
        JOIN tweets t ON f.following = t.user_id
        JOIN profile p ON f.following = p.id
        WHERE f.user_id = ${userId}

        UNION   

        SELECT p.name, p.handle, t.content, t.created_at, t.image, t.location, t.id, TRUE AS is_own_tweet
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