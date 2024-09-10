import { createClient } from "@/utils/supabase/server";
import Tweet from "../tweet/Tweet";
import { getUserId } from "@/app/lib/api/users";


const Bookmarks = async () => {

    const supabase = createClient()
    const userId = await getUserId();
    const { data, error } = await supabase
        .rpc('get_bookmarked_tweets', { current_user_id: userId });

    if (!data || error) {
        return (
            <div className="flex items-center justify-center w-full mt-6">
                <p className="text-red-500 font-semibold">Something went wrong.</p >
            </div>
        )
    }

    if (data.length === 0) {
        return (
            <div className="w-full text-center mt-6">
                <h3 className="text-emerald-600 font-medium">Looks like you haven&apos;t bookmarked any tweets yet!</h3>
            </div>
        )
    }

    return (
        <div>
            {data.map(tweet =>
                <Tweet key={tweet.id} tweet={tweet} />)}
        </div>
    )
}
export default Bookmarks