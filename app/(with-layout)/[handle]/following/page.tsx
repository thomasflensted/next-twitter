import { authenticateAndGetKindeId } from "@/app/data/dataUser";
import UserFollows from "@/app/ui/follower-following-list/UserFollows";
import BackHeader from "@/app/ui/global/BackHeader"
import { FollowerListSkeleton } from "@/app/ui/skeletons/skeletons";
import { Suspense } from "react";

export default async function Page({ params }: { params: { handle: string } }) {

    const { handle } = params;
    const kindeId = await authenticateAndGetKindeId();

    return (
        <>
            <BackHeader href={"/" + handle} />
            <Suspense fallback={<FollowerListSkeleton />}>
                <UserFollows handle={handle} kindeId={kindeId} />
            </Suspense>
        </>
    )
}