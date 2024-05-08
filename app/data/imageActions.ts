'use server'

import { s3, PutObject } from "./s3Bucket"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

export async function getSignedURL() {
    const signedUrl = await getSignedUrl(s3, PutObject, { expiresIn: 60 })
    return { success: signedUrl }
}