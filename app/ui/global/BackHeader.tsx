import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

const BackHeader = ({ returnUrl, text }: { returnUrl: string, text: string }) => {
    return (
        <Link href={returnUrl} className="group flex gap-4 items-center py-4 px-6 w-min">
            <FaArrowLeft className="group-hover:-translate-x-2 transition-all ease-in-out" />
            <h1 className="font-semibold whitespace-nowrap">{text}</h1>
        </Link>
    )
}
export default BackHeader