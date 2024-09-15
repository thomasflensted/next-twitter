'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { getUserId } from "../api/users";
import { ProfileSchema } from "../validation/profileSchema";
import { redirect } from "next/navigation";
import { ImageSchema } from "../validation/imageSchema";
import { uploadImageToS3 } from "../s3Bucket";

export async function unfollowUser(userHandle: string) {
    const supabase = createClient()
    const userId = await getUserId();
    if (!userId) return;
    const { data } = await supabase
        .from('accounts')
        .select('user_id')
        .eq('handle', userHandle);
    if (!data || !data[0].user_id) return;
    await supabase.from('follows')
        .delete()
        .eq('user_id', userId)
        .eq('following', data[0].user_id);
    revalidatePath('/' + userHandle);
}

export async function followUser(userHandle: string) {
    const supabase = createClient()
    const userId = await getUserId();
    if (!userId) return;
    const { data } = await supabase
        .from('accounts')
        .select('user_id')
        .eq('handle', userHandle);
    if (!data || !data[0].user_id) return;
    await supabase
        .from('follows')
        .insert({ user_id: userId, following: data[0].user_id });
    //revalidatePath('/' + userHandle);
}

export type AccountState = {
    error: {
        profilepic?: string[],
        coverphoto?: string[],
        name?: string[],
        handle?: string[],
        bio?: string[],
        location?: string[],
        website?: string[],
        general?: string | null
    } | null
}

export async function updateAccount(
    prevState: AccountState,
    formData: FormData): Promise<AccountState> {

    const res = ProfileSchema.extend({
        coverphoto: ImageSchema,
        profilepic: ImageSchema
    }).safeParse(Object.fromEntries(formData));

    if (!res.success) {
        return {
            error: {
                ...res.error.flatten().fieldErrors,
                general: ''
            }
        }
    }

    const supabase = createClient()
    const userId = await getUserId();

    const handleRes = await supabase
        .from('accounts')
        .select('handle')
        .eq('handle', res.data.handle)
        .neq('user_id', userId)

    if (handleRes.error) {
        return { error: { general: "Something went wrong" } }
    } else if (handleRes.data.length > 0) {
        return { error: { handle: ["Another user with that handle already exists"] } }
    }

    const { data } = res;
    const profilePicUrl = data.profilepic ? await uploadImageToS3(data.profilepic) : null;
    const coverPhotoUrl = data.coverphoto ? await uploadImageToS3(data.coverphoto) : null;

    const { error } = await supabase
        .from('accounts')
        .update({
            name: data.name,
            handle: data.handle,
            bio: data.bio,
            location: data.location,
            website: data.website,
            profile_pic: profilePicUrl?.url.split('?')[0],
            cover_photo: coverPhotoUrl?.url.split('?')[0]
        })
        .eq('user_id', userId);
    if (error) {
        return { error: { general: error.message } }
    } else {
        redirect('/' + res.data.handle);
    }
}

export async function deleteAccount() {
    const supabase = createClient()
    const userId = await getUserId();
    if (!userId) return;
    await supabase
        .from('accounts')
        .delete()
        .eq('user_id', userId);
    revalidatePath('/');
    redirect('/');
}
