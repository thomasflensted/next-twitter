import NameAndHandle from "./NameAndHandle";
import EditAndLogoutBtns from "./EditAndLogoutBtns";
import FollowBtn from "../follower-following-list/FollowBtn";
import FollowCounts from "./FollowCounts";
import ProfileLocation from "./ProfileLocation";
import ProfileWebsite from "./ProfileWebsite";
import { doesUserFollowOtherUser, getProfileFromHandle, getUserProfile } from "@/app/data/userData";

export async function ProfileContent({ handle }: { handle: string }) {

    const ownProfile = await getUserProfile();
    const profile = await getProfileFromHandle(handle);
    const isOwnProfile = ownProfile.handle === profile.handle;
    const isFollowingUser = isOwnProfile ? null : await doesUserFollowOtherUser(ownProfile.id, profile.id);

    return (
        <div className="py-5 px-5 flex flex-col gap-3 border-b">
            <NameAndHandle name={profile.name} handle={profile.handle} />
            {profile.bio && <p className="text-emerald-600 font-light text-sm w-3/4">{profile.bio}</p>}
            {profile.website && <ProfileWebsite url={profile.website} />}
            {profile.location && <ProfileLocation location={profile.location} />}
            <div className="flex justify-between">
                <FollowCounts handle={profile.handle} />
                {isOwnProfile && <EditAndLogoutBtns />}
                {!isOwnProfile && <FollowBtn handle={profile.handle} isFollowingUser={isFollowingUser} />}
            </div>
        </div>
    )
}