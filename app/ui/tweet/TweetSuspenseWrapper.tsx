import Tweet from "./Tweet";
import { getTweet } from "@/app/lib/api/tweets";
import ResponseMsg from "../global/ResponseMsg";

const TweetSuspenseWrapper = async ({ tweetId }: { tweetId: string }) => {

    const { data, error } = await getTweet(tweetId);

    if (!data || error) return (
        <ResponseMsg msg="Something went wrong." error />
    );

    if (data.length === 0) return (
        <ResponseMsg msg="It looks like you tried to load a tweet that doesn't exist." />
    )

    return (
        <Tweet tweet={data[0]} />
    )
}
export default TweetSuspenseWrapper