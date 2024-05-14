'use server'

import { getSignedURL } from "../s3Bucket";

export async function uploadImage(image: File) {

    const url = await getSignedURL(image.type, image.size, 'helloworld');
    if (!url) return null;
    await fetch(url, {
        method: 'PUT',
        body: image,
        headers: {
            "Content-Type": 'image/jpeg'
        }
    })
    return 'thisisans3url';
}