'use server'

import { revalidatePath } from "next/cache";
import { db } from "../db";
import { deleteImageFromS3, uploadImageToS3 } from "../s3Bucket";
import { TweetValidationForm } from "./validation";
import { authenticateAndGetKindeId, getProfileFromId } from "../dataUser";
import { TweetValidationState } from "../types";
import { escapeSingleQuotes } from "@/app/lib/helpers";


export async function postTweet(prevState: TweetValidationState, formData: FormData): Promise<TweetValidationState> {

    const kindeId = await authenticateAndGetKindeId();
    const { id } = await getProfileFromId(kindeId)

    const content = formData.get('content') as string;
    const initialImage = formData.get('image') as File;
    const image = initialImage && initialImage.size === 0 && initialImage.name === 'undefined' ? undefined : initialImage;

    const validationResult = TweetValidationForm.safeParse({ content, image })
    if (!validationResult.success) return {
        message: "Something went wrong",
        errors: validationResult.error.flatten().fieldErrors
    }

    const validatedData = validationResult.data;
    const s3url = validatedData.image ? await uploadImageToS3(validatedData.image) : undefined;
    const contentEscaped = escapeSingleQuotes(validatedData.content);

    s3url
        ? await db.query(`INSERT INTO tweets (user_id, content, image)
                        VALUES (${id}, '${contentEscaped}', '${s3url.url.split('?')[0]}');`)
        : await db.query(`INSERT INTO tweets (content, user_id)
                        VALUES ('${contentEscaped}', ${id});`);

    revalidatePath('/');
    return { success: "Tweet was successfully posted." };
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
