import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

const Page = ({ params }: { params: { id: number } }) => {
    return (
        <Link href='/' className="group flex gap-4 items-center py-4 px-6 w-min">
            <FaArrowLeft className="group-hover:-translate-x-2 transition-all ease-in-out" />
            <h1 className="font-semibold whitespace-nowrap">Back to Feed</h1>
        </Link>
    )
}
export default Page