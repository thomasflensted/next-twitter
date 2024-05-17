
import { getTotalFollows } from "@/app/data/userData"
import Link from "next/link"

async function FollowCounts({ handle }: { handle: string }) {

    const follows = await getTotalFollows(handle)

    return (
        <div className="flex gap-4 items-center">
            <Link href={`/${handle}/following`} className="text-emerald-600 font-medium text-sm">{follows.following} following</Link>
            <Link href={`/${handle}/followers`} className="text-emerald-600 font-medium text-sm">{follows.followers} followers</Link>
        </div>
    )
}
export default FollowCounts