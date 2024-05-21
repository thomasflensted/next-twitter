import { getTweets } from "@/app/data/dataTweets";
import TweetComponent from "./Tweet"
import { getUserProfile } from "@/app/data/dataUser";


export default async function FeedTweets({ kindeId }: { kindeId: string }) {

    const { id } = await getUserProfile(kindeId);
    const tweets = await getTweets(id)

    if (tweets.length > 0)
        return (
            <>
                {tweets.map(tweet =>
                    <TweetComponent loggedInUser={id} key={tweet.id} tweet={tweet} />)}
            </>
        )

    return (
        <div className="font-medium text-emerald-600 text-center mx-auto">
            <h1 className="my-4">Looks like you&apos;re now following anybody yet!</h1>
        </div>
    )
}