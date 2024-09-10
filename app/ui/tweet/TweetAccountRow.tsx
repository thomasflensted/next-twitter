import Link from "next/link"
import DeleteTweetBtn from "./DeleteTweetBtn";
import { TweetType } from "@/app/lib/types";

type Props = {
    date: TweetType['created_at'],
    name: TweetType['name'],
    handle: TweetType['handle'],
    isOwnTweet: TweetType['is_own_tweet'],
    id: TweetType['id'],
    image: TweetType['image']
}

const TweetAccountRow = ({ date, name, handle, isOwnTweet, id, image }: Props) => {

    const formattedDate = new Date(date).toDateString();

    return (
        <div className="flex justify-between items-baseline">
            <div className="flex items-baseline gap-2">
                <Link className="flex gap-2 items-baseline" href={'/' + handle}>
                    <h3 className="text-sm font-medium dark:text-white">{name}</h3>
                    <h3 className="text-xs font-light text-gray-400 dark:text-gray-300">@{handle}</h3>
                </Link>
                <Link href={'/tweet/' + id}>
                    <h3 className="text-xs font-light text-gray-400 dark:text-gray-300">{formattedDate}</h3>
                </Link>
            </div>
            {isOwnTweet && <DeleteTweetBtn imageUrl={image} id={id} />}
        </div>
    )
}
export default TweetAccountRow