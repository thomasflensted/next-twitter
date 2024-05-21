import NameAndHandle from "./NameAndHandle";
import EditAndLogoutBtns from "./EditAndLogoutBtns";
import FollowBtn from "../follower-following-list/FollowBtn";
import FollowCounts from "./FollowCounts";
import ProfileLocation from "./ProfileLocation";
import ProfileWebsite from "./ProfileWebsite";
import { getProfileFromHandle } from "@/app/data/dataUser";
import { doesUserFollowOtherUser } from "@/app/data/dataFollowers";

export async function ProfileContent({ handle, isOwnAccount, ownId }: { handle: string, isOwnAccount: boolean, ownId: number }) {

    const profile = await getProfileFromHandle(handle)
    const isFollowingUser = await doesUserFollowOtherUser(ownId, profile.id)

    return (
        <div className="py-5 px-5 flex flex-col gap-3 border-b">
            <NameAndHandle name={profile.name} handle={profile.handle} />
            {profile.bio && <p className="text-emerald-600 font-light text-sm w-3/4">{profile.bio}</p>}
            {profile.website && <ProfileWebsite url={profile.website} />}
            {profile.location && <ProfileLocation location={profile.location} />}
            <div className="flex justify-between">
                <FollowCounts handle={profile.handle} />
                {isOwnAccount && <EditAndLogoutBtns />}
                {!isOwnAccount && <FollowBtn handle={profile.handle} ownId={ownId} isFollowingUser={isFollowingUser} />}
            </div>
        </div>
    )
}