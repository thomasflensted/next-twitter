import { Suspense } from "react";
import NewTweet from "../ui/tweet-new/NewTweet";
import Tweets from "../ui/tweet/FeedTweets";
import { MultipleTweetsSkeleton } from "../ui/skeletons/skeletons";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { getProfileIdFromKindeId } from "../data/userData";

export default async function Home() {

    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) redirect('/signin')

    const userId = await getProfileIdFromKindeId(user.id);

    return (
        <>
            <NewTweet userId={userId} />
            <Suspense fallback={<MultipleTweetsSkeleton />}>
                <Tweets />
            </Suspense>
        </>
    )
}