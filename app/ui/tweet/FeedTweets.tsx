import { getTweets } from "@/app/data/dataTweets";
import TweetComponent from "./Tweet"
import { getUserProfile } from "@/app/data/dataUser";
import Link from "next/link";


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
        <div className=" text-emerald-600 text-center mx-auto flex flex-col gap-1.5">
            <h1 className="mt-4 font-medium">Looks like you&apos;re not following anybody yet!</h1>
            <p className="text-sm font-light">Find some suggestions <Link className="underline" href="/suggestions">here.</Link></p>
        </div>
    )
}