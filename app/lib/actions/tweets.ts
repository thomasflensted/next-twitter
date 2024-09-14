'use server'

import { revalidatePath, revalidateTag } from "next/cache";
import { getUserId } from "@/app/lib/api/users";
import { createClient } from "@/utils/supabase/server";
import { uploadImageToS3, deleteImageFromS3 } from "../s3Bucket";
import { TweetValidationState } from "../types";
import { escapeSingleQuotes } from "../helpers";
import { TweetSchema } from "../validation/tweetSchema";

export async function postTweet(prevState: TweetValidationState, formData: FormData) {

    const supabase = createClient()
    const userId = await getUserId()
    const rawContent = formData.get('content');
    const rawImage = formData.get('image');

    const validatedData = TweetSchema.safeParse({ content: rawContent, image: rawImage });

    if (!validatedData.success) return {
        message: "Something went wrong",
        errors: validatedData.error.flatten().fieldErrors
    }

    const { content, image } = validatedData.data;

    const s3url = image
        ? await uploadImageToS3(image)
        : null;

    await supabase
        .from('tweets')
        .insert({
            user_id: userId,
            content: escapeSingleQuotes(content),
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
    console.log('success');
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
