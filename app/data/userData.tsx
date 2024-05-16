import { db } from "./db";

export type Profile = {
    id: number,
    kinde_id: string
    bio: string,
    website: string,
    name: string,
    location: string,
    handle: string
}

export async function userHasUpdatedDetails(kindeId: string): Promise<boolean | undefined> {
    try {
        const res = await db.query(`SELECT kinde_id, name, location, bio, website 
                                    FROM profile WHERE kinde_id = '${kindeId}';`);
        return res.rowCount !== 0;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get tweet.')
    }
}

export async function getProfileIdFromKindeId(kindeId: string): Promise<number> {
    try {
        const res = await db.query(`SELECT id FROM profile WHERE kinde_id = '${kindeId}'`).then(res => res.rows[0].id);
        return res;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get tweet.')
    }
}

export async function getProfile(handle: string): Promise<Profile> {
    try {
        const res = await db.query(`SELECT kinde_id, id, bio, website, name, location, handle 
                                    FROM profile WHERE handle = '${handle}';`);
        return res.rows[0];
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function getProfileFromId(id: string): Promise<Profile> {
    try {
        const res = await db.query(`SELECT bio, website, name, location, handle 
                                    FROM profile WHERE kinde_id = '${id}';`).then(res => res.rows[0])
        return res;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function getTotalFollows(handle: string): Promise<{ following: number, followers: number }> {
    try {
        const userId = await db.query(`SELECT id FROM profile WHERE handle = '${handle}'`).then(res => res.rows[0].id);
        const following = await db.query(`SELECT COUNT(*) FROM follows WHERE user_id = ${userId};`).then(res => res.rows[0].count);
        const followers = await db.query(`SELECT COUNT(*) FROM follows WHERE following = ${userId};`).then(res => res.rows[0].count);
        return { following, followers };
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}