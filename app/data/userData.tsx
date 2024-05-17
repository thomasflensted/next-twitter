import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "./db";
import { notFound, redirect } from "next/navigation";

export type Profile = {
    id: number,
    kinde_id: string,
    handle: string
    bio: string,
    website: string,
    name: string,
    location: string,
}

export type Follows = { following: number, followers: number };

export async function getUserProfile() {

    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    if (!user) redirect('/signin');

    const profile = await getProfileFromId(user.id);
    if (!profile) redirect('/updatedetails');

    return profile;
}

export async function getProfileFromHandle(handle: string): Promise<Profile> {

    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    if (!user) redirect('/signin');

    const profile = await db.query(`SELECT * FROM profile WHERE handle = '${handle}'`).then(res => res.rows[0]);
    if (!profile) notFound();
    return profile;
}

export async function getProfileFromId(id: string): Promise<Profile> {
    try {
        const res = await db.query(`SELECT id, bio, website, name, location, handle 
                                    FROM profile WHERE kinde_id = '${id}';`).then(res => res.rows[0])
        return res;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function getTotalFollows(handle: string): Promise<Follows> {
    try {
        const res = await db.query(`SELECT
                                    (SELECT COUNT(*) FROM follows WHERE user_id = p.id) AS following,
                                    (SELECT COUNT(*) FROM follows WHERE following = p.id) AS followers
                                    FROM profile p WHERE p.handle = '${handle}';`).then(res => res.rows[0]);
        return res;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function doesUserFollowOtherUser(ownId: number, userId: number): Promise<boolean> {
    try {
        const res = await db.query(`
        SELECT CASE WHEN EXISTS 
        (SELECT 1 FROM follows WHERE user_id = ${ownId} AND following = ${userId})
        THEN CAST('t' AS BOOLEAN) ELSE CAST('f' AS BOOLEAN)
        END AS "follows";`).then(res => res.rows[0].follows);
        return res;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function followUser(ownId: string, userId: string) {
    try {
        const res = await db.query(`
        SELECT CASE WHEN EXISTS (
            SELECT 1 FROM follows
            WHERE user_id = (SELECT id FROM profile WHERE handle = '${ownId}')
            AND following = (SELECT id FROM profile WHERE handle = '${userId}'))
        THEN CAST('t' AS BOOLEAN) ELSE CAST('f' AS BOOLEAN)
        END AS "follows"`).then(res => res.rows[0].follows);
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function getUserFollows(handle: string): Promise<{ name: string, handle: string, bio: string, id: number }[]> {
    try {
        const accounts = await db.query(`
        SELECT p2.bio, p2.handle, p2.name, p2.id
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
export async function getUserFollowers(handle: string): Promise<{ name: string, handle: string, bio: string, id: number }[]> {
    try {
        const accounts = await db.query(`
        SELECT p2.bio, p2.handle, p2.name, p2.id
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