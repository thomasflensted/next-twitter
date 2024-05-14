import Link from "next/link"
import { FaLink } from "react-icons/fa6"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const ProfileContent = ({ profile, handle }: { profile: any, handle: string }) => {
    return (
        <div className="py-5 px-5 flex flex-col gap-3 border-b">
            <div className="flex gap-2 items-baseline">
                <h1 className="text-emerald-700 font-medium text-md">{profile.name}</h1>
                <p className="text-emerald-500 font-light text-xs">{`@${handle}`}</p>
            </div>
            <p className="text-emerald-600 font-light text-sm w-3/4">{profile.bio}</p>
            {profile.website && <div className="flex gap-2 items-center">
                <FaLink className="text-xs text-emerald-600" />
                <a href={profile.website} target="_blank" className="text-emerald-600 font-light text-xs">{profile.website}</a>
            </div>}
            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <Link href='/name/following' className="text-emerald-600 font-medium text-sm">150 following</Link>
                    <Link href='/name/followers' className="text-emerald-600 font-medium text-sm">82 followers</Link>
                </div>
                <div className="flex gap-1 items-center">
                    <button className="text-emerald-600 text-xs border rounded-full px-3 py-1 hover:bg-neutral-100">Edit profile</button>
                    <LogoutLink className="text-red-600 text-xs border border-red-100 rounded-full px-3 py-1 hover:bg-red-50">Log out</LogoutLink>
                </div>
            </div>
        </div>
    )
}
export default ProfileContent