import Link from "next/link"
import DeleteTweetBtn from "./DeleteTweetBtn";

const TweetAccountRow = ({ tweet_id, date }: { tweet_id: number, date: string }) => {

    const formattedDate = new Date(date).toDateString();

    return (
        <div className="flex justify-between pr-6 items-baseline">
            <div className="flex items-baseline gap-2">
                <Link href='/name'>
                    <h3 className="text-sm font-medium dark:text-white">Name Nameson</h3>
                </Link>
                <Link href='/name'>
                    <h3 className="text-xs font-light text-gray-400 dark:text-gray-300">@handle</h3>
                </Link>
                <Link href={'/tweet/' + tweet_id}>
                    <h3 className="text-xs font-light text-gray-400 dark:text-gray-300">{formattedDate}</h3>
                </Link>
            </div>
            <DeleteTweetBtn id={tweet_id} />
        </div>
    )
}
export default TweetAccountRow