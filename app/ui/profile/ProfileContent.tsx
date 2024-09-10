import NameAndHandle from "./NameAndHandle";
import EditAndLogoutBtns from "./EditAndLogoutBtns";
import FollowBtn from "../follower-following-list/FollowBtn";
import ProfileLocation from "./ProfileLocation";
import ProfileWebsite from "./ProfileWebsite";
import { notFound } from "next/navigation";
import FollowCounts from "./FollowCounts";
import { getAccountInfo } from "@/app/lib/api/users";

export async function ProfileContent({ handle, userId }: { handle: string; userId: string; }) {

    const { data, error } = await getAccountInfo(handle, userId)

    if (!data || error) notFound();

    const { name,
        bio,
        website,
        location,
        is_own_account,
        is_following,
        followers_count,
        following_count
    } = data;

    return (
        <div className="py-5 px-5 flex flex-col gap-3 border-b min-h-36">
            <div className="flex-grow flex gap-3 flex-col">
                {<NameAndHandle name={name} handle={handle} />}
                {bio && <p className="text-emerald-600 font-light text-sm w-3/4">{bio}</p>}
                {website && <ProfileWebsite url={website} />}
                {location && <ProfileLocation location={location} />}
            </div>
            <div className="flex justify-between">
                <FollowCounts handle={handle} followers={followers_count} following={following_count} />
                {is_own_account && <EditAndLogoutBtns />}
                {!is_own_account && <FollowBtn handle={handle} isFollowingUser={is_following} />}
            </div>
        </div>
    )
}