'use server'
import { redirect } from "next/navigation";
import { db } from "../db";
import { getUserProfile } from "../dataUser";
import { revalidatePath } from "next/cache";

export async function setUserDetails(kindeId: string, formData: FormData) {

    const handle = formData.get('handle');
    const name = formData.get('name');
    const website = formData.get('website');
    const location = formData.get('location');
    const bio = formData.get('bio');

    await db.query(`INSERT INTO profile (kinde_id, handle, name, location, bio, website)
    VALUES ('${kindeId}', '${handle}','${name}','${location}', '${bio}', '${website}')`)

    redirect('/')
}

export async function unfollowUser(userHandle: string, ownId: number, path: string) {
    const otherUserId = await db.query(`SELECT id FROM profile WHERE handle ='${userHandle}';`).then(res => res.rows[0].id);
    await db.query(`DELETE FROM follows WHERE user_id = ${ownId} AND following = ${otherUserId};`);
    revalidatePath(path);
}

export async function followUser(userHandle: string, ownId: number, path: string) {
    const otherUserId = await db.query(`SELECT id FROM profile WHERE handle ='${userHandle}';`).then(res => res.rows[0].id);
    await db.query(`INSERT INTO follows (user_id, following) VALUES (${ownId}, ${otherUserId});`);
    revalidatePath(path);
}

export async function updateUserDetails(id: number, formData: FormData) {

    const handle = formData.get('handle');
    const name = formData.get('name');
    const website = formData.get('website');
    const location = formData.get('location');
    const bio = formData.get('bio');

    await db.query(`
    UPDATE profile
    SET name = '${name}', handle = '${handle}', website = '${website}', location = '${location}', bio = '${bio}'
    WHERE id = ${id}
    `)

    revalidatePath('/' + handle)
    redirect('/' + handle)

}