import { db } from "./db";
import { Tweet } from "./types";

export async function getTweets(): Promise<Tweet[]> {
    try {
        const res = await db.query("SELECT * FROM tweets ORDER BY created_at DESC;");
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

export async function getProfile(handle: string) {
    try {
        const res = await db.query(`SELECT users.id, bio, website, name FROM profile
                                    JOIN users ON profile.user_id = users.id
                                    WHERE users.handle = '${handle}';`);
        return res.rows[0];
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get tweet.')
    }
}