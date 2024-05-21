import { Suspense } from "react";
import NewTweet from "../ui/tweet-new/NewTweet";
import Tweets from "../ui/tweet/FeedTweets";
import { MultipleTweetsSkeleton } from "../ui/skeletons/skeletons";
import { authenticateAndGetKindeId } from "../data/dataUser";


export default async function Home() {

    const id = await authenticateAndGetKindeId();

    return (
        <>
            <NewTweet kindeId={id} />
            <Suspense fallback={<MultipleTweetsSkeleton />}>
                <Tweets kindeId={id} />
            </Suspense>
        </>
    )
}