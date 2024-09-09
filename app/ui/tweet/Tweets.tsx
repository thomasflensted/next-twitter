import { createClient } from "@/utils/supabase/server";
import Tweet from "./Tweet";
import Link from "next/link";

const Tweets = async ({ userId }: { userId: string }) => {

    const supabase = createClient()
    const { data, error } = await supabase
        .rpc('get_tweets_from_following',
            { follower_id: userId }
        );

    if (error || !data) return (
        <div className="flex items-center justify-center w-full mt-6">
            <p className="text-red-500 font-semibold">Unable to get tweets.</p >
        </div>
    )

    if (data.length === 0) return (
        <div className="flex flex-col items-center justify-center w-full mt-6">
            <p className="text-emerald-600 font-light">Looks like you&apos;re not following anybody!</p>
            <Link href='/suggestions' className="text-emerald-600 underline font-medium">Get some suggestions here.</Link>
        </div>
    )

    return (
        <div>
            {data && data.map(tweet => (
                <Tweet key={tweet.id} tweet={tweet} />))}
        </div>
    )
}
export default Tweets