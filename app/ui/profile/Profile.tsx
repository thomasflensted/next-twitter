import { Suspense } from "react";
import ProfileImage from "./ProfileImage";
import { MultipleTweetsSkeleton, ProfileSkeleton } from "../skeletons/skeletons";
import { ProfileContent } from "./ProfileContent";
import UserTweets from "./UserTweets";
import { doesUserExist, getUserId } from "@/app/lib/api/users";
import ResponseMsg from "../global/ResponseMsg";
import BackHeader from "../global/BackHeader";
import { PiSmileySad } from "react-icons/pi";

async function Profile({ handle }: { handle: string }) {

    const [userId, { data, error }] = await Promise.all([
        getUserId(), doesUserExist(handle)
    ]);

    if (error) {
        return <ResponseMsg msg="An error occured." error />
    }

    if (!data) {
        return <>
            <BackHeader href="/" />
            <PiSmileySad className="w-10 h-10 mx-auto mt-8 text-emerald-600" />
            <ResponseMsg paddingTop={10} msg="User not found." />
        </>
    }

    return (
        <>
            <Suspense fallback={<ProfileSkeleton />}>
                <ProfileImage handle={handle} />
                <ProfileContent
                    handle={handle}
                    userId={userId}
                />
            </Suspense>
            <Suspense fallback={<MultipleTweetsSkeleton />}>
                <UserTweets
                    handle={handle}
                    userId={userId} />
            </Suspense>
        </>
    )
}
export default Profile;
