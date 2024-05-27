import { authenticateAndGetKindeId, getProfileFromHandle, getUserProfile } from "@/app/data/dataUser";
import Profile from "@/app/ui/profile/Profile";
import { FullProfileSkeleton } from "@/app/ui/skeletons/skeletons";
import { Suspense } from "react";

export default async function Page({ params }: { params: { handle: string } }) {

    const { handle } = params;
    await getProfileFromHandle(handle);
    const kindeId = await authenticateAndGetKindeId();

    return (
        <Suspense fallback={<FullProfileSkeleton />}>
            <Profile profileHandle={handle} kindeId={kindeId} />
        </Suspense>
    )
}
