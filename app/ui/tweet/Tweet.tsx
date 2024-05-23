import TweetContainer from "./TweetContainer"
import TweetAccountRow from "./TweetAccountRow"
import TweetContent from "./TweetContent"
import TweetOptions from "./TweetOptions"
import { TweetWithAdditionalData } from "@/app/data/types"
import ProfilePicColumn from "./ProfilePicColumn"
import TweetImage from "./TweetImage"

const TweetComponent = ({ tweet, loggedInUser }: { tweet: TweetWithAdditionalData, loggedInUser: number }) => {

    const accountRow = {
        isOwnTweet: tweet.is_own_tweet,
        image: tweet.image,
        name: tweet.author_name,
        handle: tweet.author_handle,
        date: tweet.created_at,
        id: tweet.id
    }

    const optionsRow = {
        isLiked: tweet.is_liked,
        userId: tweet.user_id,
        id: tweet.id,
        isBookmarked: tweet.is_bookmarked,
        isOwnTweet: tweet.is_own_tweet,
        location: tweet.location,
    }

    return (
        <TweetContainer>
            <ProfilePicColumn image={tweet.author_profile_pic} handle={tweet.author_handle} />
            <div className="h-full w-full flex flex-col pt-4 pr-6">
                <TweetAccountRow data={accountRow} />
                <TweetContent content={tweet.content} />
                {tweet.image && <TweetImage imageUrl={tweet.image} />}
                <TweetOptions loggedInUser={loggedInUser} data={optionsRow} />
            </div>
        </TweetContainer>
    )
}
export default TweetComponent