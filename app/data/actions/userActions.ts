'use server'
import { redirect } from "next/navigation";
import { db } from "../db";

export async function setUserDetails(kindeId: string, formData: FormData) {

    const handle = formData.get('handle');
    const name = formData.get('name');
    const website = formData.get('website');
    const location = formData.get('location');
    const bio = formData.get('bio');
    console.log(handle, name, website, location, bio)

    await db.query(`INSERT INTO profile (kinde_id, handle, name, location, bio, website)
    VALUES ('${kindeId}', '${handle}','${name}','${location}', '${bio}', '${website}')`)

    redirect('/')

}