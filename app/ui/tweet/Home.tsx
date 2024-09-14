import { getUserId } from "@/app/lib/api/users";
import NewTweet from "../tweet-new/NewTweet";
import Tweets from "./Tweets";
import { Suspense } from "react";
import { MultipleTweetsSkeleton, NewTweetFormSkeleton } from "../skeletons/skeletons";

const Home = async () => {

    const userId = await getUserId();

    return (
        <>
            <Suspense fallback={<NewTweetFormSkeleton />}>
                <NewTweet userId={userId} />
            </Suspense>
            <Suspense fallback={<MultipleTweetsSkeleton />}>
                <Tweets userId={userId} />
            </Suspense>
        </>
    )
}
export default Home