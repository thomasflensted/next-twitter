import { getTweets } from "@/app/data/data";
import TweetComponent from "./Tweet"

export default async function Tweets() {

    const tweets = await getTweets();

    return (
        <> {tweets.map(tweet => <TweetComponent key={tweet.id} tweet={tweet} />)}
        </>
    )
}