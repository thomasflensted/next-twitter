'use client'

import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

export default function Error({ error }: { error: Error & { digest?: string } }) {

    console.log(error);

    return (
        <div className="mt-10 flex text-center flex-col gap-2">
            <h2 className="text-red-600 font-medium">Something went wrong.</h2>
            <Link className="text-xs border rounded py-1 px-2 flex gap-2 items-center justify-center hover:bg-gray-100" href='/'>
                <FaArrowLeft className="text-xs font-medium" />
                Go Home
            </Link>
        </div>
    )
}