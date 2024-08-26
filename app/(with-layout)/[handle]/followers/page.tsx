// import { authenticateAndGetKindeId } from "@/app/data/dataUser";
import UserFollowings from "@/app/ui/follower-following-list/UserFollowings";
import BackHeader from "@/app/ui/global/BackHeader"
import { FollowerListSkeleton } from "@/app/ui/skeletons/skeletons";
import { Suspense } from "react";

export default async function Page({ params }: { params: { handle: string } }) {

    const { handle } = params;
    // const kindeId = await authenticateAndGetKindeId();

    return (
        <>
            <BackHeader href={'/' + handle} />
            <Suspense fallback={<FollowerListSkeleton />}>
                <div></div>
                {/* <UserFollowings kindeId={kindeId} handle={handle} /> */}
            </Suspense>
        </>
    )
}