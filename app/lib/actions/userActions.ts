'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { getUserId } from "../api/users";

// import { redirect } from "next/navigation";
// import { db } from "../db";
// import { revalidatePath } from "next/cache";
// import { UserDetailsValidationState } from "../types";
// import { FullProfileValidationForm, ProfileValidationForm } from "./validation";
// import { deleteImageFromS3, uploadImageToS3 } from "../s3Bucket";
// import { escapeSingleQuotes } from "@/app/lib/helpers";
// import { getUserId } from "@/app/lib/api/users";
// import { createClient } from "@/utils/supabase/server";

// export async function setUserDetails(prevState: UserDetailsValidationState, formData: FormData): Promise<UserDetailsValidationState> {

//     const kindeId = '1'; // await authenticateAndGetKindeId()

//     const handle = formData.get('handle');
//     const name = formData.get('name');
//     const website = formData.get('website');
//     const location = formData.get('location');
//     const bio = formData.get('bio');

//     const validationResponse = ProfileValidationForm.safeParse({ name, handle, website, location, bio });
//     if (!validationResponse.success) return {
//         message: "Something went wrong",
//         errors: validationResponse.error.flatten().fieldErrors
//     }


//     const validatedData = validationResponse.data;
//     const websiteEscaped = escapeSingleQuotes(validatedData.website);
//     const locationEscaped = escapeSingleQuotes(validatedData.location);
//     const bioEscaped = escapeSingleQuotes(validatedData.bio);

//     await db.query(`INSERT INTO profile (kinde_id, handle, name, location, bio, website)
//     VALUES ('${kindeId}', '${validatedData.handle}','${validatedData.name}','${locationEscaped}', '${bioEscaped}', '${websiteEscaped}')`)

//     redirect('/')
// }

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

// export async function updateUserDetails(prevState: UserDetailsValidationState, formData: FormData): Promise<UserDetailsValidationState> {

//     const kindeId = '1' // await authenticateAndGetKindeId();
//     const { id, handle: currentHandle } = await getUserProfile(kindeId);

//     const handle = formData.get('handle') as string;
//     const name = formData.get('name') as string;
//     const website = formData.get('website') as string;
//     const location = formData.get('location') as string;
//     const bio = formData.get('bio') as string;
//     const initialProfilePic = formData.get('profilepic') as File;
//     const initialCoverPhoto = formData.get('coverphoto') as File;
//     const profilePic = initialProfilePic && initialProfilePic.size === 0 && initialProfilePic.name === 'undefined' ? undefined : initialProfilePic;
//     const coverPhoto = initialCoverPhoto && initialCoverPhoto.size === 0 && initialCoverPhoto.name === 'undefined' ? undefined : initialCoverPhoto;

//     const validationResponse = FullProfileValidationForm.safeParse({ name, handle, website, location, bio, profilePic, coverPhoto });
//     if (!validationResponse.success) return {
//         message: "Something went wrong",
//         errors: validationResponse.error.flatten().fieldErrors
//     }

//     const validatedData = validationResponse.data;

//     const profilePicS3url = validatedData.profilePic ? await uploadImageToS3(validatedData.profilePic) : undefined;
//     const coverPhotoS3url = validatedData.coverPhoto ? await uploadImageToS3(validatedData.coverPhoto) : undefined;

//     const websiteEscaped = escapeSingleQuotes(validatedData.website);
//     const locationEscaped = escapeSingleQuotes(validatedData.location);
//     const bioEscaped = escapeSingleQuotes(validatedData.bio);

//     await db.query(`
//     UPDATE profile
//     SET name = '${validatedData.name}', 
//         handle = '${validatedData.handle}', 
//         website = '${websiteEscaped}', 
//         location = '${locationEscaped}', 
//         bio = '${bioEscaped}'
//     WHERE id = ${id}`)

//     if (profilePicS3url) {
//         const { profile_pic } = await getProfileImages(currentHandle);
//         if (profile_pic) await deleteImageFromS3(profile_pic);
//         await db.query(`
//         UPDATE profile
//         SET profile_pic = '${profilePicS3url.url.split('?')[0]}'
//         WHERE id = ${id};`)
//     }

//     if (coverPhotoS3url) {
//         const { cover_photo } = await getProfileImages(currentHandle);
//         if (cover_photo) await deleteImageFromS3(cover_photo);
//         await db.query(`
//         UPDATE profile
//         SET cover_photo = '${coverPhotoS3url.url.split('?')[0]}'
//         WHERE id = ${id};`)
//     }

//     revalidatePath('/' + validatedData.handle)
//     redirect('/' + validatedData.handle)

// }