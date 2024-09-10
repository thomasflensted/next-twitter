import TweetContainer from "./TweetContainer"
import TweetAccountRow from "./TweetAccountRow"
import TweetContent from "./TweetContent"
import TweetOptions from "./TweetOptions"
import ProfilePicColumn from "./ProfilePicColumn"
import TweetImage from "./TweetImage"
import { TweetType } from "@/app/lib/types"

const Tweet = ({ tweet }: { tweet: TweetType }) => {

    const {
        profile_pic,
        id,
        handle,
        name,
        image,
        is_own_tweet,
        created_at,
        content,
        location,
        is_bookmarked,
        is_liked
    } = tweet

    return (
        <TweetContainer>
            <ProfilePicColumn
                image={profile_pic}
                handle={handle} />
            <div className="h-full w-full flex flex-col pt-4 pr-6">
                <TweetAccountRow
                    date={created_at}
                    handle={handle}
                    name={name}
                    id={id}
                    image={image}
                    isOwnTweet={is_own_tweet}
                />
                <TweetContent
                    content={content} />
                <TweetImage
                    imageUrl={image} />
                <TweetOptions
                    location={location}
                    id={id}
                    isBookmarked={is_bookmarked}
                    isLiked={is_liked} />
            </div>
        </TweetContainer>
    )
}
export default Tweet