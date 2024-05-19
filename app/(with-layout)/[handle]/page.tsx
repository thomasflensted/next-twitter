import ProfileImage from "../../ui/profile/ProfileImage";
import { ProfileContent } from "@/app/ui/profile/ProfileContent";
import UserTweets from "@/app/ui/profile/UserTweets";

export default async function Page({ params }: { params: { handle: string } }) {

    const { handle } = params;

    return (
        <>
            <ProfileImage />
            <ProfileContent handle={handle} />
            <UserTweets handle={handle} />
        </>
    )
}
