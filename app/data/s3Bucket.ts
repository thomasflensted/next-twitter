'use server'

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

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

    if (!acceptedTypes.includes(type) || size > maxSize) {
        return null;
    }

    const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME!,
        Key: 'test-file',
        ContentLength: size,
        ContentType: type,
        ChecksumSHA256: checksum
    })

    const signedUrl = await getSignedUrl(s3, putObjectCommand, { expiresIn: 60 })
    return signedUrl
}