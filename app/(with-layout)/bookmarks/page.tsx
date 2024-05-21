import { authenticateAndGetKindeId } from "@/app/data/dataUser";
import Bookmarks from "@/app/ui/bookmarks/Bookmarks";
import ColumnHeading from "@/app/ui/global/columns/ColumnHeading"
import { MultipleTweetsSkeleton } from "@/app/ui/skeletons/skeletons";
import { Suspense } from "react";

export default async function Page() {

    const kindeId = await authenticateAndGetKindeId();

    return (
        <div>
            <ColumnHeading text="Your Bookmarks" />
            <Suspense fallback={<MultipleTweetsSkeleton />}>
                <Bookmarks kindeId={kindeId} />
            </Suspense>
        </div>
    )
}