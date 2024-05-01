import Link from "next/link"

const TweetAccountRow = ({ tweet_id }: { tweet_id: number }) => {
    return (
        <div className="flex justify-start gap-2 w-full items-baseline">
            <Link href='/name'>
                <h3 className="text-sm font-medium dark:text-white">Name Nameson</h3>
            </Link>
            <Link href='/name'>
                <h3 className="text-xs font-light text-gray-400 dark:text-gray-300">@handle</h3>
            </Link>
            <Link href={'/tweet/' + tweet_id}>
                <h3 className="text-xs font-light text-gray-400 dark:text-gray-300">Thu Apr 25, 15:45</h3>
            </Link>
        </div>
    )
}
export default TweetAccountRow