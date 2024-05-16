'use client'

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

const NotFound = () => {

    const { back } = useRouter();

    return (
        <div className="mt-10 flex flex-col gap-4 items-center">
            <h1 className="text-emerald-600 font-medium text-xl">
                Oops, it looks like that page doesn&apos;t exist.
            </h1>
            <button className="group border py-1 px-4 rounded text-emerald-600 flex gap-2 items-center hover:bg-gray-100" onClick={() => back()}>
                <FaArrowLeft className="text-xs group-hover:-translate-x-1 transition-all ease-out duration-200" />
                Return
            </button>
        </div>
    )
}
export default NotFound