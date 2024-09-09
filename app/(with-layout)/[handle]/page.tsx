import Profile from "@/app/ui/profile/Profile";
import { FullProfileSkeleton } from "@/app/ui/skeletons/skeletons";
import { Suspense } from "react";

export default async function Page({ params }: { params: { handle: string } }) {

    return (
        <Suspense fallback={<FullProfileSkeleton />}>
            <Profile handle={params.handle} />
        </Suspense>
    )
}
