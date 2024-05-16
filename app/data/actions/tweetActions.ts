'use server'

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { deleteImageFromS3, uploadImageToS3 } from "../s3Bucket";

export async function postTweet(userId: number, formData: FormData) {

    const content = formData.get('content');
    const image = formData.get('image');
    console.log({ image });
    if (!content) return;

    const s3url = image && image instanceof File ? await uploadImageToS3(image) : null;
    s3url
        ? await db.query(`INSERT INTO tweets (user_id, content, image)
                        VALUES ('${userId}', '${content}', '${s3url.split('?')[0]}');`)
        : await db.query(`INSERT INTO tweets (content, user_id)
                        VALUES ('${content}', '${userId}');`);
    revalidatePath('/');
}

export async function deleteTweet(imageUrl: string | null, id: number) {
    if (!id) return;
    if (imageUrl) { await deleteImageFromS3(imageUrl) }
    await db.query(`DELETE FROM tweets WHERE id = ${id}`);
    revalidatePath('/');
}
