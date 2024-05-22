import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { db } from "./db";
import { notFound, redirect } from "next/navigation";
import { Profile } from "./types";

export async function authenticateAndGetKindeId() {
    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    if (!user) redirect('/signin');
    return user.id;
}

export async function getUserProfile(kindeId: string) {
    const profile = await getProfileFromId(kindeId);
    if (!profile) redirect('/updatedetails');
    return profile;
}

export async function getInitialUserProfile(kindeId: string) {
    const profile = await getProfileFromId(kindeId);
    return profile;
}

export async function getProfileFromId(kindeId: string): Promise<Profile> {
    try {
        const profile: Profile = await db.query(`
        SELECT * FROM profile WHERE kinde_id = '${kindeId}';`).then(res => res.rows[0])
        return profile;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile.')
    }
}

export async function authenticateAndGetKindeProfile() {
    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    if (!user) redirect('/signin');
    return user;
}

export async function getProfileFromHandle(handle: string): Promise<Profile> {
    const profile = await db.query(`SELECT * FROM profile WHERE handle = '${handle}'`).then(res => res.rows[0]);
    if (!profile) notFound();
    return profile;
}

export async function getProfileImages(handle: string): Promise<{ profile_pic: string, cover_photo: string }> {
    try {
        const images = await db.query(`
        SELECT profile_pic, cover_photo
        FROM profile
        WHERE handle = '${handle}'`)
            .then(res => res.rows[0]);
        return images;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error('Failed to get profile images.')
    }
}