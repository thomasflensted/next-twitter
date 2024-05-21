import { Suspense } from "react";
import ProfileImage from "./ProfileImage";
import { MultipleTweetsSkeleton, ProfileImagesSkeleton, ProfileSkeleton } from "../skeletons/skeletons";
import { ProfileContent } from "./ProfileContent";
import UserTweets from "./UserTweets";
import { getUserProfile } from "@/app/data/dataUser";

async function Profile({ profileHandle, kindeId }: { profileHandle: string, kindeId: string }) {

    const { handle: ownHandle, id } = await getUserProfile(kindeId);
    const isOwnAccount = ownHandle === profileHandle;

    return (
        <>
            <Suspense fallback={<ProfileImagesSkeleton />}>
                <ProfileImage handle={profileHandle} />
            </Suspense>
            <Suspense fallback={<ProfileSkeleton />}>
                <ProfileContent handle={profileHandle} isOwnAccount={isOwnAccount} ownId={id} />
            </Suspense>
            <Suspense fallback={<MultipleTweetsSkeleton />}>
                <UserTweets handle={profileHandle} ownHandle={ownHandle} id={id} isOwnAccount={isOwnAccount} />
            </Suspense>
        </>
    )
}
export default Profile;