import { getTweetsByUser } from "@/app/data/tweetData";
import TweetComponent from "../tweet/Tweet";
import { getUserProfile } from "@/app/data/userData";

export default async function UserTweets({ handle }: { handle: string }) {

    const profile = await getUserProfile();
    const tweets = await getTweetsByUser(profile.handle, handle)

    return (
        <> {tweets.map(tweet =>
            <TweetComponent
                key={tweet.id}
                tweet={tweet}
            />)}
        </>
    )
}