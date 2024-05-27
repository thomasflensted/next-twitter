import { db } from "./db";
import { Follows, Profile } from "./types";

export async function getTotalFollows(handle: string): Promise<Follows> {
    try {
        const follows = await db.query(`
        SELECT
        (SELECT COUNT(*) FROM follows WHERE user_id = p.id) AS following,
        (SELECT COUNT(*) FROM follows WHERE following = p.id) AS followers
        FROM profile p WHERE p.handle = '${handle}';`)
            .then(res => res.rows[0]);
        return follows;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function doesUserFollowOtherUser(ownId: number, userId: number): Promise<boolean> {
    try {
        const follows = await db.query(`
        SELECT CASE WHEN EXISTS 
        (SELECT 1 FROM follows WHERE user_id = ${ownId} AND following = ${userId})
        THEN CAST('t' AS BOOLEAN) ELSE CAST('f' AS BOOLEAN) END AS "follows";`)
            .then(res => res.rows[0].follows);
        return follows;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function getUserFollowers(handle: string, ownId: number): Promise<Profile[]> {
    try {
        const accounts = await db.query(`
        SELECT p2.*,
        CASE WHEN EXISTS 
        (SELECT 1 FROM follows f2 WHERE f2.following = p2.id AND f2.user_id = ${ownId})
        THEN TRUE ELSE FALSE END AS does_follow
        FROM profile p1
        JOIN follows f ON p1.id = f.following
        JOIN profile p2 ON f.user_id = p2.id
        WHERE p1.handle = '${handle}';
        `).then(res => res.rows);
        return accounts;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function getUserFollowing(handle: string, ownId: number): Promise<Profile[]> {
    try {
        const accounts = await db.query(`
        SELECT p2.*,
        CASE WHEN EXISTS 
        (SELECT 1 FROM follows f2 WHERE f2.user_id = ${ownId} AND f2.following = p2.id)
        THEN TRUE ELSE FALSE END AS does_follow
        FROM profile p1
        JOIN follows f ON p1.id = f.user_id
        JOIN profile p2 ON f.following = p2.id
        WHERE p1.handle = '${handle}';
        `).then(res => res.rows);
        return accounts;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function getFollowSuggestions(ownId: number): Promise<Profile[]> {
    try {
        const suggestions = await db.query(`
        SELECT p.*,
        CASE WHEN f.user_id IS NOT NULL THEN TRUE ELSE FALSE END AS does_follow
        FROM profile p
        LEFT JOIN follows f ON p.id = f.following AND f.user_id = ${ownId}
        ORDER BY p.id LIMIT 10;
        `).then(res => res.rows);
        return suggestions;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}