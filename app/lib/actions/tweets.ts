'use server'

import { revalidatePath, revalidateTag } from "next/cache";
import { escapeSingleQuotes } from "@/app/lib/helpers";
import { getUserId } from "@/app/lib/api/users";
import { createClient } from "@/utils/supabase/server";


import { TweetValidationForm } from "../validation";
import { uploadImageToS3, deleteImageFromS3 } from "../s3Bucket";
import { TweetValidationState } from "../types";


export async function postTweet(prevState: TweetValidationState, formData: FormData): Promise<TweetValidationState> {

    const supabase = createClient()
    const userId = await getUserId()
    const content = formData.get('content') as string;
    const initialImage = formData.get('image') as File;

    const validationResult = TweetValidationForm.safeParse({ content, image: initialImage });
    if (!validationResult.success) return {
        message: "Something went wrong",
        errors: validationResult.error.flatten().fieldErrors
    }

    const { content: textContent, image: tweetImage } = validationResult.data;
    const s3url = tweetImage ? await uploadImageToS3(tweetImage) : null;

    await supabase
        .from('tweets')
        .insert({
            user_id: userId,
            content: escapeSingleQuotes(textContent),
            image: s3url?.url.split('?')[0]
        })

    revalidatePath('/');
    return { success: "Tweet was successfully posted." };
}

export async function deleteTweet(imageUrl: string | null, id: number) {
    const supabase = createClient()
    const userId = await getUserId();
    if (!userId) return;
    await supabase
        .from('tweets')
        .delete()
        .eq('user_id', userId)
        .eq('id', id);
    if (imageUrl) await deleteImageFromS3(imageUrl);
    revalidateTag('/')
}

export async function bookmarkTweet(tweetId: number) {
    const supabase = createClient()
    const userId = await getUserId();
    if (!userId) return;
    await supabase
        .from('bookmarks')
        .insert({ user_id: userId, bookmarked_tweet: tweetId });
}

export async function unBookmarkTweet(tweetId: number) {
    const supabase = createClient()
    const userId = await getUserId();
    if (!userId) return;
    await supabase
        .from('bookmarks')
        .delete()
        .eq('user_id', userId)
        .eq('bookmarked_tweet', tweetId);
}

export async function likeTweet(tweetId: number) {
    const supabase = createClient()
    const userId = await getUserId();
    if (!userId) return;
    await supabase
        .from('likes')
        .insert({ user_id: userId, liked_tweet: tweetId });
}

export async function unLikeTweet(tweetId: number) {
    const supabase = createClient()
    const userId = await getUserId();
    if (!userId) return;
    await supabase
        .from('likes')
        .delete()
        .eq('user_id', userId)
        .eq('liked_tweet', tweetId);
}
