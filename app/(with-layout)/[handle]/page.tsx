import ProfileImage from "../../ui/profile/ProfileImage";
import { notFound, redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getProfile } from "@/app/data/userData";
import { ProfileContent } from "@/app/ui/profile/ProfileContent";
import UserTweets from "@/app/ui/profile/UserTweets";
import BackHeader from "@/app/ui/global/BackHeader";

export default async function Page({ params }: { params: { handle: string } }) {

    const { getUser } = getKindeServerSession()
    const user = await getUser();
    if (!user) redirect('/signin')

    const profile = await getProfile(params.handle);
    if (!profile) notFound();

    return (
        <>
            <BackHeader />
            <ProfileImage />
            <ProfileContent profile={profile} handle={params.handle} />
            <UserTweets handle={profile.handle} />
        </>
    )
}
