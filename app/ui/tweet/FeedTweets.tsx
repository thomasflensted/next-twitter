import { getTweets, getTweetsByUser } from "@/app/data/tweetData";
import TweetComponent from "./Tweet"

export default async function FeedTweets({ userId }: { userId: number }) {

    const tweets = await getTweets(userId)

    return (
        <> {tweets.map(tweet =>
            <TweetComponent
                key={tweet.id}
                tweet={tweet}
            />)}
        </>
    )
}