import TweetContainer from "./TweetContainer"
import TweetAccountRow from "./TweetAccountRow"
import TweetContent from "./TweetContent"
import TweetOptions from "./TweetOptions"
import { Tweet } from "@/app/data/types"
import ProfilePicColumn from "./ProfilePicColumn"
import TweetImage from "./TweetImage"

const TweetComponent = ({ tweet }: { tweet: Tweet }) => {
    return (
        <TweetContainer>
            <ProfilePicColumn />
            <div className="h-full w-full flex flex-col pt-4 pr-6">
                <TweetAccountRow
                    imageUrl={tweet.image}
                    name={tweet.name}
                    handle={tweet.handle}
                    date={tweet.created_at}
                    tweet_id={tweet.id} />
                <TweetContent content={tweet.content} />
                {tweet.image && <TweetImage imageUrl={tweet.image.split('?')[0]} />}
                <TweetOptions location={tweet.location} />
            </div>
        </TweetContainer>
    )
}
export default TweetComponent