import { Suspense } from "react";
import NewTweet from "../ui/tweet-new/NewTweet";
import Tweets from "../ui/tweet/FeedTweets";
import { MultipleTweetsSkeleton } from "../ui/skeletons/skeletons";
import { createClient } from "@/utils/supabase/server";
// import { authenticateAndGetKindeId } from "../data/dataUser";


export default async function Home() {

    // const id = await authenticateAndGetKindeId();
    const supabaseClient = createClient();
    const { data: { user }, error } = await supabaseClient.auth.getUser();

    return (
        <>
            {/* <NewTweet kindeId={id} /> */}
            <Suspense fallback={<MultipleTweetsSkeleton />}>
                {user && <h1>Hello There {user.email}</h1>}
                {error && <h1>Hello There {error.message}</h1>}
                {/* <Tweets kindeId={id} /> */}
            </Suspense>
        </>
    )
}