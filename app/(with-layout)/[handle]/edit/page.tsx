// import { authenticateAndGetKindeId } from "@/app/data/dataUser";
import EditProfileContainer from "@/app/ui/edit-profile/EditProfileContainer";
import BackHeader from "@/app/ui/global/BackHeader";
import { EditAccountSkeleton } from "@/app/ui/skeletons/skeletons";
import { Suspense } from "react";

export default async function Page({ params }: { params: { handle: string } }) {

    // const { handle } = params;
    // const kindeId = await authenticateAndGetKindeId();

    return (
        <>
            <BackHeader href={'/' + params.handle} />
            <div className="w-3/4 mx-auto mt-6">
                <h1 className="font-medium text-md text-emerald-600 mb-4">Edit Account Details</h1>
                <Suspense fallback={<EditAccountSkeleton />}>
                    <div></div>
                    {/* <EditProfileContainer kindeId={kindeId} /> */}
                </Suspense>
            </div>
        </>
    )
}