import { getTweetsByUser } from "@/app/data/tweetData";
import TweetComponent from "../tweet/Tweet";

export default async function UserTweets({ handle }: { handle: string }) {

    const tweets = await getTweetsByUser(handle)

    return (
        <> {tweets.map(tweet =>
            <TweetComponent
                key={tweet.id}
                tweet={tweet}
            />)}
        </>
    )
}