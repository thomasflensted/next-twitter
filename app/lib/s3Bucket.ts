'use server'

import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import crypto from 'crypto';
import { revalidatePath } from "next/cache";
import { getUserId } from "./api/users";
import { createClient } from "@/utils/supabase/server";

const s3 = new S3Client({
    region: process.env.AWS_BUCKET_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_BUCKET_SECRET_KEY!
    },
})

export async function getSignedURL(type: string, size: number, checksum: string) {

    const userId = await getUserId();
    const generateFilename = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

    const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: generateFilename(),
        ContentLength: size,
        ContentType: type,
        ChecksumSHA256: checksum,
        Metadata: { userId }
    })

    const signedUrl = await getSignedUrl(s3, putObjectCommand, { expiresIn: 60 })
    if (!signedUrl) return { error: "Something went wrong." };
    return { url: signedUrl }
}

const computeSHA256 = async (file: File) => {
    const buffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashIndex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join("")
    return hashIndex;
}

export async function uploadImageToS3(image: File) {

    const checksum = await computeSHA256(image);
    const signedUrlResult = await getSignedURL(image.type, image.size, checksum);
    if (!signedUrlResult.url) return null;

    await fetch(signedUrlResult.url, {
        method: 'PUT',
        body: image,
        headers: {
            "Content-Type": 'image/jpeg'
        }
    })
    return signedUrlResult;
}

export async function deleteImageFromS3(fileUrl: string) {

    const supabase = createClient()
    const userId = await getUserId();
    const { data } = await supabase
        .from('accounts')
        .select('handle')
        .eq('id', userId)
        .single();

    const deleteObjectCommand = new DeleteObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileUrl.split('/').pop()!
    })

    await s3.send(deleteObjectCommand)
    revalidatePath('/' + data?.handle);
}