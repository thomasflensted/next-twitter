'use server'
import { redirect } from "next/navigation";
import { db } from "../db";
import { authenticateAndGetKindeId, getProfileImages, getUserProfile } from "../dataUser";
import { revalidatePath } from "next/cache";
import { UserDetailsValidationState } from "../types";
import { FullProfileValidationForm, ProfileValidationForm } from "./validation";
import { deleteImageFromS3, uploadImageToS3 } from "../s3Bucket";

export async function setUserDetails(prevState: UserDetailsValidationState, formData: FormData): Promise<UserDetailsValidationState> {

    const kindeId = await authenticateAndGetKindeId()

    const handle = formData.get('handle');
    const name = formData.get('name');
    const website = formData.get('website');
    const location = formData.get('location');
    const bio = formData.get('bio');

    const validationResponse = ProfileValidationForm.safeParse({ name, handle, website, location, bio });
    if (!validationResponse.success) return {
        message: "Something went wrong",
        errors: validationResponse.error.flatten().fieldErrors
    }

    const validatedData = validationResponse.data;
    await db.query(`INSERT INTO profile (kinde_id, handle, name, location, bio, website)
    VALUES ('${kindeId}', '${validatedData.handle}','${validatedData.name}','${validatedData.location}', '${validatedData.bio}', '${validatedData.website}')`)

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

export async function updateUserDetails(prevState: UserDetailsValidationState, formData: FormData): Promise<UserDetailsValidationState> {

    const kindeId = await authenticateAndGetKindeId();
    const { id, handle: currentHandle } = await getUserProfile(kindeId);

    const handle = formData.get('handle') as string;
    const name = formData.get('name') as string;
    const website = formData.get('website') as string;
    const location = formData.get('location') as string;
    const bio = formData.get('bio') as string;
    const initialProfilePic = formData.get('profilepic') as File;
    const initialCoverPhoto = formData.get('coverphoto') as File;
    const profilePic = initialProfilePic && initialProfilePic.size === 0 && initialProfilePic.name === 'undefined' ? undefined : initialProfilePic;
    const coverPhoto = initialCoverPhoto && initialCoverPhoto.size === 0 && initialCoverPhoto.name === 'undefined' ? undefined : initialCoverPhoto;

    const validationResponse = FullProfileValidationForm.safeParse({ name, handle, website, location, bio, profilePic, coverPhoto });
    if (!validationResponse.success) return {
        message: "Something went wrong",
        errors: validationResponse.error.flatten().fieldErrors
    }

    const validatedData = validationResponse.data;
    const profilePicS3url = validatedData.profilePic ? await uploadImageToS3(validatedData.profilePic) : undefined;
    const coverPhotoS3url = validatedData.coverPhoto ? await uploadImageToS3(validatedData.coverPhoto) : undefined;

    await db.query(`
    UPDATE profile
    SET name = '${validatedData.name}', 
        handle = '${validatedData.handle}', 
        website = '${validatedData.website}', 
        location = '${validatedData.location}', 
        bio = '${validatedData.bio}'
    WHERE id = ${id}`)

    if (profilePicS3url) {
        const { profile_pic } = await getProfileImages(currentHandle);
        if (profile_pic) await deleteImageFromS3(profile_pic);
        await db.query(`
        UPDATE profile
        SET profile_pic = '${profilePicS3url.url.split('?')[0]}'
        WHERE id = ${id};`)
    }

    if (coverPhotoS3url) {
        const { cover_photo } = await getProfileImages(currentHandle);
        if (cover_photo) await deleteImageFromS3(cover_photo);
        await db.query(`
        UPDATE profile
        SET cover_photo = '${coverPhotoS3url.url.split('?')[0]}'
        WHERE id = ${id};`)
    }

    revalidatePath('/' + validatedData.handle)
    redirect('/' + validatedData.handle)

}