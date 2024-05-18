import TweetContainer from "./TweetContainer"
import TweetAccountRow from "./TweetAccountRow"
import TweetContent from "./TweetContent"
import TweetOptions from "./TweetOptions"
import { Tweet } from "@/app/data/types"
import ProfilePicColumn from "./ProfilePicColumn"
import TweetImage from "./TweetImage"

const TweetComponent = ({ tweet, userId }: { tweet: Tweet, userId: number }) => {

    return (
        <TweetContainer>
            <ProfilePicColumn handle={tweet.handle} />
            <div className="h-full w-full flex flex-col pt-4 pr-6">
                <TweetAccountRow
                    isOwnTweet={tweet.is_own_tweet}
                    imageUrl={tweet.image}
                    name={tweet.name}
                    handle={tweet.handle}
                    date={tweet.created_at}
                    tweet_id={tweet.id} />
                <TweetContent content={tweet.content} />
                {tweet.image && <TweetImage imageUrl={tweet.image.split('?')[0]} />}
                <TweetOptions
                    isLiked={tweet.is_liked}
                    userId={userId}
                    tweetId={tweet.id}
                    isBookmarked={tweet.is_bookmarked}
                    isOwnTweet={tweet.is_own_tweet}
                    location={tweet.location} />
            </div>
        </TweetContainer>
    )
}
export default TweetComponent