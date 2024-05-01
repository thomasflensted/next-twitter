import Link from "next/link"
import { FaLink } from "react-icons/fa6"

const ProfileContent = () => {
    return (
        <div className="py-5 px-5 flex flex-col gap-3 border-b">
            <div className="flex gap-2 items-baseline">
                <h1 className="text-emerald-700 font-medium text-md">Thomas Flensted</h1>
                <p className="text-emerald-500 font-light text-xs">@thomasflensted</p>
            </div>
            <p className="text-emerald-600 font-light text-sm w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati unde nisi magni. Numquam at praesentium sapiente similique exercitationem officia dolore!</p>
            <div className="flex gap-2 items-center">
                <FaLink className="text-xs text-emerald-600" />
                <a href="https://thomasflensted.com" target="_blank" className="text-emerald-600 font-light text-xs">www.thomasflensted.com</a>
            </div>
            <div className="flex gap-4 items-center">
                <Link href='/name/following' className="text-emerald-600 font-medium text-sm">150 following</Link>
                <Link href='/name/followers' className="text-emerald-600 font-medium text-sm">82 followers</Link>
            </div>
        </div>
    )
}
export default ProfileContent