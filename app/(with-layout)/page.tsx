import { Suspense } from "react";
import NewTweet from "../ui/tweet-new/NewTweet";
import Tweets from "../ui/tweet/FeedTweets";
import { MultipleTweetsSkeleton } from "../ui/skeletons/skeletons";
import { getUserProfile } from "../data/userData";

export default async function Home() {

    const { id } = await getUserProfile();

    return (
        <>
            <NewTweet userId={id} />
            <Suspense fallback={<MultipleTweetsSkeleton />}>
                <Tweets userId={id} />
            </Suspense>
        </>
    )
}