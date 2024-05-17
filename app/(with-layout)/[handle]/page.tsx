import ProfileImage from "../../ui/profile/ProfileImage";
import { ProfileContent } from "@/app/ui/profile/ProfileContent";
import UserTweets from "@/app/ui/profile/UserTweets";
import BackHeader from "@/app/ui/global/BackHeader";

export default async function Page({ params }: { params: { handle: string } }) {

    const { handle } = params;

    return (
        <>
            <BackHeader />
            <ProfileImage />
            <ProfileContent handle={handle} />
            <UserTweets handle={handle} />
        </>
    )
}
