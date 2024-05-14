'use server'

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { uploadImage } from "./imageActions";

export async function postTweet(formData: FormData) {

    const content = formData.get('content');
    const image = formData.get('image');
    if (!content) return;

    const s3url = image && image instanceof File ? await uploadImage(image) : null;

    await db.query(`INSERT INTO tweets (content, location, user_id, image)
                    VALUES ('${content}', '', 1, '${s3url}');`);

    revalidatePath('/');
}

export async function deleteTweet(id: number) {
    if (!id) return;
    await db.query(`DELETE FROM tweets WHERE id = ${id}`);
    revalidatePath('/');
}
