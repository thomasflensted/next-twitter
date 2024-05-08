import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

export const s3 = new S3Client({
    region: process.env.AWS_BUCKET_REGION!,
    credentials: {
        accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY!,
        secretAccessKey: process.env.AWS_BUCKET_SECRET_KEY!
    },
})

export const PutObject = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: 'test-file',
})