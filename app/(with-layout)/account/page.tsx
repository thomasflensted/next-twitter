import BackHeader from "@/app/ui/global/BackHeader";
import AccountForm from "@/app/ui/forms/AccountForm";
import { Suspense } from "react";
import EditAccount from "@/app/ui/profile/EditAccount";

export default async function Page() {

    return (
        <div>
            <BackHeader href="/" />
            <div className="w-full justify-center flex mt-6">
                <Suspense fallback={<h1>Hello World</h1>}>
                    <EditAccount />
                </Suspense>
            </div>
        </div>
    )
} 