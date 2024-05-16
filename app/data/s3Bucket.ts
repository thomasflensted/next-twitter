'use server'

import { DeleteObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import crypto from 'crypto';

const s3 = new S3Client({
    region: process.env.AWS_BUCKET_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_BUCKET_SECRET_KEY!
    },
})

const acceptedTypes = ['image/jpeg', 'image/png', 'image/webp'];
const maxSize = 1024 * 1024 * 10;

export async function getSignedURL(type: string, size: number, checksum: string) {

    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) {
        redirect('/signin')
    }

    if (!acceptedTypes.includes(type) || size > maxSize) {
        return null;
    }

    const generateFilename = (bytes = 32) => crypto.randomBytes(bytes).toString('hex');

    const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: generateFilename(),
        ContentLength: size,
        ContentType: type,
        ChecksumSHA256: checksum,
        Metadata: {
            userId: user.id
        }
    })

    const signedUrl = await getSignedUrl(s3, putObjectCommand, { expiresIn: 60 })
    return signedUrl;
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
    const url = await getSignedURL(image.type, image.size, checksum);
    if (!url) return null;
    await fetch(url, {
        method: 'PUT',
        body: image,
        headers: {
            "Content-Type": 'image/jpeg'
        }
    })
    return url;
}

export async function deleteImageFromS3(fileUrl: string) {
    const deleteObjectCommand = new DeleteObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: fileUrl.split('/').pop()!
    })
    await s3.send(deleteObjectCommand)
}