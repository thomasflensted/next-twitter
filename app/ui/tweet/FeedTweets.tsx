import { getTweets, getTweetsByUser } from "@/app/data/tweetData";
import TweetComponent from "./Tweet"

export default async function FeedTweets() {

    const tweets = await getTweets()

    return (
        <> {tweets.map(tweet =>
            <TweetComponent
                key={tweet.id}
                tweet={tweet}
            />)}
        </>
    )
}