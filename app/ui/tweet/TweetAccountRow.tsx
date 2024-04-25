import Link from "next/link"

const TweetAccountRow = () => {
    return (
        <div className="flex justify-start gap-2 w-full items-baseline">
            <Link href='/name'>
                <h3 className="text-sm font-medium">Name Nameson</h3>
            </Link>
            <Link href='/name'>
                <h3 className="text-xs font-light text-gray-400">@handle</h3>
            </Link>
            <Link href='/tweet/123'>
                <h3 className="text-xs font-light text-gray-400">Thu Apr 25, 15:45</h3>
            </Link>
        </div>
    )
}
export default TweetAccountRow