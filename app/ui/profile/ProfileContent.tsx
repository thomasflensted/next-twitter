import Link from "next/link"
import { FaLink, FaMapPin } from "react-icons/fa6"
import NameAndHandle from "./NameAndHandle";
import { Profile, getProfileFromId, getProfileIdFromKindeId, getTotalFollows } from "@/app/data/userData";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import EditAndLogoutBtns from "./EditAndLogoutBtns";
import FollowBtn from "../follower-following-list/FollowBtn";

export async function ProfileContent({ profile, handle }: { profile: Profile, handle: string }) {

    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    if (!user) redirect('/signin')

    const follows: { following: number, followers: number } = await getTotalFollows(handle)

    return (
        <div className="py-5 px-5 flex flex-col gap-3 border-b">
            <NameAndHandle name={profile.name} handle={profile.handle} />
            {profile.bio && <p className="text-emerald-600 font-light text-sm w-3/4">{profile.bio}</p>}
            {profile.website && <div className="flex gap-2 items-center">
                <FaLink className="text-xs text-emerald-600" />
                <a href={profile.website} target="_blank" className="text-emerald-600 font-light text-xs">{profile.website}</a>
            </div>}
            {profile.location && <div className="flex gap-2 items-center">
                <FaMapPin className="text-xs text-emerald-600" />
                <p className="text-emerald-600 font-light text-xs">{profile.location}</p>
            </div>}
            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <Link href='/name/following' className="text-emerald-600 font-medium text-sm">{follows.following} following</Link>
                    <Link href='/name/followers' className="text-emerald-600 font-medium text-sm">{follows.followers} followers</Link>
                </div>
                {user.id === profile.kinde_id
                    ? <EditAndLogoutBtns />
                    : <FollowBtn />}
            </div>
        </div>
    )
}