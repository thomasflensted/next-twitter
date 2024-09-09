import Link from "next/link"

async function FollowCounts({ following, followers, handle }: { following: number, followers: number, handle: string }) {

    return (
        <div className="flex gap-4 items-center">
            <Link
                href={`/${handle}/following`}
                className="text-emerald-600 font-medium text-sm">
                {following} following
            </Link>
            <Link
                href={`/${handle}/followers`}
                className="text-emerald-600 font-medium text-sm">
                {followers} follower{followers !== 1 && "s"}
            </Link>
        </div>
    )
}
export default FollowCounts