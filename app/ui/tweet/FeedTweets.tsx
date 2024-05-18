import { getTweets } from "@/app/data/tweetData";
import TweetComponent from "./Tweet"

export default async function FeedTweets({ userId }: { userId: number }) {

    const tweets = await getTweets(userId)

    return (
        <> {tweets.map(tweet =>
            <TweetComponent
                userId={userId}
                key={tweet.id}
                tweet={tweet}
            />)}
        </>
    )
}