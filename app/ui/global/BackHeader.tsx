'use client'

import { useRouter } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa6"

const BackHeader = () => {

    const { back } = useRouter();

    return (
        <div onClick={() => back()} className="group flex gap-4 items-center py-4 px-6 w-min cursor-pointer">
            <FaArrowLeft className="group-hover:-translate-x-2 transition-all ease-in-out" />
            <h1 className="font-semibold whitespace-nowrap">Back</h1>
        </div>
    )
}
export default BackHeader