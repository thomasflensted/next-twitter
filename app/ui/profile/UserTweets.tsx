import Tweet from "../tweet/Tweet";
import { getUserTweets } from "@/app/lib/api/tweets";

export default async function UserTweets({ handle, userId }: { handle: string, userId: string }) {

    const { data, error } = await getUserTweets(handle, userId);

    if (error || !data) {
        return (
            <div className="flex items-center justify-center w-full mt-6">
                <p className="text-red-500 font-semibold">Error: Unable to get tweets.</p >
            </div>
        )
    }

    if (data.length === 0) {
        return (
            <div className="flex items-center justify-center w-full mt-6">
                <p className="text-red-500 font-semibold">@{handle} hasn&apos;t tweeted yet.</p >
            </div>
        )
    }

    return (
        <> {data.map(tweet =>
            <Tweet
                key={tweet.id}
                tweet={tweet}
            />)}
        </>
    )
}