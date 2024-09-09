import UserFollowing from "@/app/ui/follower-following-list/UserFollowing";
import BackHeader from "@/app/ui/global/BackHeader"
import { FollowerListSkeleton } from "@/app/ui/skeletons/skeletons";
import { Suspense } from "react";

export default async function Page({ params }: { params: { handle: string } }) {

    return (
        <>
            <BackHeader href={"/" + params.handle} />
            <Suspense fallback={<FollowerListSkeleton />}>
                <UserFollowing handle={params.handle} />
            </Suspense>
        </>
    )
}