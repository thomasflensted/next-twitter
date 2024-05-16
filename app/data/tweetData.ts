'use server'

import { db } from "./db";
import { Tweet } from "./types";

export async function getTweets(): Promise<Tweet[]> {
    try {
        const res = await db.query(`
            SELECT tweets.id, tweets.content, tweets.location, tweets.created_at, tweets.image, profile.name, profile.handle
            FROM tweets
            JOIN profile ON tweets.user_id = profile.id
            ORDER BY tweets.created_at DESC;`);
        return res.rows;
    } catch (error) {
        console.log('Database Error:', error);
        throw Error('Failed to get tweets.');
    }
}

export async function getTweetsByUser(handle: string): Promise<Tweet[]> {
    try {
        const res = await db.query(`
            SELECT tweets.id, tweets.content, tweets.location, tweets.created_at, tweets.image, profile.name
            FROM tweets
            JOIN profile on tweets.user_id = profile.id
            WHERE profile.handle = '${handle}'
            ORDER BY tweets.created_at DESC;`);
        return res.rows;
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