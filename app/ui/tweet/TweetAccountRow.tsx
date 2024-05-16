import Link from "next/link"
import DeleteTweetBtn from "./DeleteTweetBtn";

type Props = {
    tweet_id: number,
    date: string,
    name: string,
    handle?: string,
    imageUrl: string | null
}

const TweetAccountRow = ({ tweet_id, date, name, handle, imageUrl }: Props) => {

    const formattedDate = new Date(date).toDateString();

    return (
        <div className="flex justify-between items-baseline">
            <div className="flex items-baseline gap-2">
                {handle
                    ? <Link className="flex gap-2 items-baseline" href={'/' + handle}>
                        <h3 className="text-sm font-medium dark:text-white">{name}</h3>
                        <h3 className="text-xs font-light text-gray-400 dark:text-gray-300">@{handle}</h3>
                    </Link>
                    : <div className="flex gap-2 items-baseline">
                        <h3 className="text-sm font-medium dark:text-white">{name}</h3>
                    </div>
                }
                <Link href={'/tweet/' + tweet_id}>
                    <h3 className="text-xs font-light text-gray-400 dark:text-gray-300">{formattedDate}</h3>
                </Link>
            </div>
            <DeleteTweetBtn imageUrl={imageUrl} id={tweet_id} />
        </div>
    )
}
export default TweetAccountRow