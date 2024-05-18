import { getBookMarkedTweets } from "@/app/data/tweetData";
import { getUserProfile } from "@/app/data/userData"
import ColumnHeading from "@/app/ui/global/columns/ColumnHeading"
import TweetComponent from "@/app/ui/tweet/Tweet";

export default async function Page() {

    const { id } = await getUserProfile();
    const bookmarkedTweets = await getBookMarkedTweets(id)

    return (
        <div>
            <ColumnHeading text="Your Bookmarks" />
            {bookmarkedTweets.map(tweet =>
                <TweetComponent
                    userId={id}
                    key={tweet.id}
                    tweet={tweet}
                />)}
        </div>
    )
}