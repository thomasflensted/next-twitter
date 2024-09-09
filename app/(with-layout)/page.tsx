import { Suspense } from "react";
import { HomeSkeleton } from "../ui/skeletons/skeletons";
import Home from "../ui/tweet/Home";

export default async function Page() {

    return (
        <Suspense fallback={<HomeSkeleton />}>
            <Home />
        </Suspense>
    )
}