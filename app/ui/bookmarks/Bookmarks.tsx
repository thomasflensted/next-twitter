import { getBookMarkedTweets } from "@/app/data/dataTweets";
import { getUserProfile } from "@/app/data/dataUser";
import TweetComponent from "../tweet/Tweet";

const Bookmarks = async ({ kindeId }: { kindeId: string }) => {

    const { id } = await getUserProfile(kindeId);
    const bookmarkedTweets = await getBookMarkedTweets(id)

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