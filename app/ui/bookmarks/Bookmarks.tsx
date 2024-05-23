import { getBookMarkedTweets } from "@/app/data/dataTweets";
import { getUserProfile } from "@/app/data/dataUser";
import TweetComponent from "../tweet/Tweet";

const Bookmarks = async ({ kindeId }: { kindeId: string }) => {

    const { id } = await getUserProfile(kindeId);
    const bookmarkedTweets = await getBookMarkedTweets(id)

    if (bookmarkedTweets.length === 0) {
        return (
            <div className="w-full text-center mt-6">
                <h3 className="text-emerald-600 font-medium">Looks like you haven&apos;t bookmarked any tweets yet!</h3>
            </div>
        )
    }
    return (
        <>
            {bookmarkedTweets.map(tweet =>
                <TweetComponent
                    loggedInUser={id}
                    key={tweet.id}
                    tweet={tweet}
                />)
            }
        </>
    )
}
export default Bookmarks