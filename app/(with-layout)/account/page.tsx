import { Suspense } from "react";
import EditAccount from "@/app/ui/profile/EditAccount";
import { EditAccountSkeleton } from "@/app/ui/skeletons/skeletons";

export default async function Page() {

    return (
        <div className="text-center">
            <h2 className="font-medium text-emerald-600 text-lg py-4 border-b w-full">Account details</h2>
            <div className="w-full justify-center flex mt-6">
                <Suspense fallback={<EditAccountSkeleton />}>
                    <EditAccount />
                </Suspense>
            </div>
        </div>
    )
} 