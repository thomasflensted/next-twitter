import { db } from "./db";
import { Tweet } from "./types";

export async function getTweets(): Promise<Tweet[]> {
    try {
        const res = await db.query("SELECT * FROM tweets");
        return res.rows;
    } catch (error) {
        console.log('Database Error:', error);
        throw Error('Failed to get tweets.');
    }
}

export async function getTweetById(id: number): Promise<Tweet | null> {
    try {
        const res = await db.query(`SELECT * FROM tweets WHERE id = ${id}`);
        return res.rows[0];
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get tweet.')
    }
}