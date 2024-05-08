import Link from "next/link"
import { FaLink } from "react-icons/fa6"

const ProfileContent = ({ profile, handle }: { profile: any, handle: string }) => {
    return (
        <div className="py-5 px-5 flex flex-col gap-3 border-b">
            <div className="flex gap-2 items-baseline">
                <h1 className="text-emerald-700 font-medium text-md">{profile.name}</h1>
                <p className="text-emerald-500 font-light text-xs">{`@${handle}`}</p>
            </div>
            <p className="text-emerald-600 font-light text-sm w-3/4">{profile.bio}</p>
            <div className="flex gap-2 items-center">
                <FaLink className="text-xs text-emerald-600" />
                <a href={profile.website} target="_blank" className="text-emerald-600 font-light text-xs">{profile.website}</a>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <Link href='/name/following' className="text-emerald-600 font-medium text-sm">150 following</Link>
                    <Link href='/name/followers' className="text-emerald-600 font-medium text-sm">82 followers</Link>
                </div>
                <button className="text-emerald-600 text-sm border rounded-full px-4 py-1">Edit</button>
            </div>
        </div>
    )
}
export default ProfileContent