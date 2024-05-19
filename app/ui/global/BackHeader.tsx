'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa6"

const BackHeader = ({ href }: { href: string }) => {

    return (
        <Link href={href} className="group flex gap-4 items-center py-4 px-6 cursor-pointer border-b w-full">
            <FaArrowLeft className="group-hover:-translate-x-2 transition-all ease-in-out" />
            <h1 className="font-semibold whitespace-nowrap">Back</h1>
        </Link>
    )
}
export default BackHeader