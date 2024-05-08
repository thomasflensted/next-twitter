
import ProfileImage from "../ui/profile/ProfileImage";
import ProfileContent from "../ui/profile/ProfileContent";
import Tweets from "../ui/tweet/Tweets";
import { getProfile } from "../data/data";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { handle: string } }) {

    const profile = await getProfile(params.handle);
    if (!profile) notFound();

    return (
        <>
            <ProfileImage />
            <ProfileContent handle={params.handle} profile={profile} />
            <Tweets />
        </>
    )
}
