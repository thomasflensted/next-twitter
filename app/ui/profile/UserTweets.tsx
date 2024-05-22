import { getTweetsByUser } from "@/app/data/dataTweets";
import TweetComponent from "../tweet/Tweet";
import { NoTweetsMessageOtherProfile, NoTweetsMessageOwnProfile } from "./NoTweetsMessages";

export default async function UserTweets({ ownHandle, id, handle, isOwnAccount }: { handle: string, id: number, ownHandle: string, isOwnAccount: boolean }) {

    const tweets = await getTweetsByUser(ownHandle, handle)

    if (isOwnAccount && tweets.length === 0) return (<NoTweetsMessageOwnProfile />)
    if (!isOwnAccount && tweets.length === 0) return (<NoTweetsMessageOtherProfile handle={handle} />)

    return (
        <> {tweets.map(tweet =>
            <TweetComponent
                key={tweet.id}
                loggedInUser={id}
                tweet={tweet}
            />)}
        </>
    )
}