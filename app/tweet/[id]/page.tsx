import Tweet from "@/app/ui/tweet/Tweet"
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa6"

const Page = ({ params }: { params: { id: number } }) => {
    return (
        <div>
            <Link href='/' className="border-b">
                <div className="group flex gap-4 items-center py-4 px-6 w-min">
                    <FaArrowLeft className="group-hover:-translate-x-2 transition-all ease-in-out" />
                    <h1 className="font-semibold">Tweet</h1>
                </div>
            </Link>
            <Tweet />
        </div>
    )
}
export default Page