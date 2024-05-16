import Link from "next/link"
import { ImCross } from "react-icons/im"

const Logo = () => {
    return (
        <Link href='/' className="w-full flex justify-center mb-12 gap-2 items-center" >
            <ImCross className="text-xl text-emerald-600" />
            <ImCross className="text-lg text-emerald-600 rotate-45" />
            <ImCross className="text-lg text-emerald-600 rotate-45" />
        </Link >
    )
}
export default Logo