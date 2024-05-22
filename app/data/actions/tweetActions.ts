'use server'

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { deleteImageFromS3, uploadImageToS3 } from "../s3Bucket";
import { validateTweetData } from "./validation";

export async function postTweet(userId: number, formData: FormData) {

    const content = formData.get('content') as string;
    const image = formData.get('image') as File;

    if (!content) return;

    // const validationResult = validateTweetData(1, image);
    // if (validationResult.failure) return (validationResult.errors);

    const s3url = image && image instanceof File ? await uploadImageToS3(image) : null;
    s3url
        ? await db.query(`INSERT INTO tweets (user_id, content, image)
                        VALUES ('${userId}', '${content}', '${s3url.split('?')[0]}');`)
        : await db.query(`INSERT INTO tweets (content, user_id)
                        VALUES ('${content}', '${userId}');`);

    revalidatePath('/');

    // return validationResult.succes;
}

export async function deleteTweet(imageUrl: string | null, id: number) {
    if (!id) return;
    if (imageUrl) { await deleteImageFromS3(imageUrl) }
    await db.query(`DELETE FROM tweets WHERE id = ${id}`);
    revalidatePath('/');
}

export async function bookmarkTweet(userId: number, tweetId: number) {
    await db.query(`INSERT INTO bookmarks (user_id, bookmarked_tweet) VALUES (${userId}, ${tweetId});`)
    revalidatePath('/bookmarks')
}

export async function unBookmarkTweet(userId: number, tweetId: number) {
    await db.query(`DELETE FROM bookmarks WHERE user_id = ${userId} AND bookmarked_tweet = ${tweetId};`)
    revalidatePath('/bookmarks')
}

export async function likeTweet(userId: number, tweetId: number) {
    await db.query(`INSERT INTO likes (user_id, liked_tweet) VALUES (${userId}, ${tweetId});`);
    revalidatePath('/');
}

export async function unLikeTweet(userId: number, tweetId: number) {
    await db.query(`DELETE FROM likes WHERE user_id = ${userId} AND liked_tweet = ${tweetId};`)
    revalidatePath('/');
}
