import { FollowerListSkeleton } from "@/app/ui/skeletons/skeletons";
import { Suggestions } from "@/app/ui/suggestions/Suggestions";
import { Suspense } from "react";

export default async function Page() {

    return (
        <div className="w-full">
            <div className="w-full px-6 py-6 text-center border-b">
                <h2 className="text-emerald-600 text-md">Here are some suggestions on people you can follow:</h2>
            </div>
            <Suspense fallback={<FollowerListSkeleton />}>
                <Suggestions />
            </Suspense>
        </div>
    )
}