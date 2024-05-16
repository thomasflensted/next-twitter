import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import DetailsForm from "@/app/ui/update-details/DetailsForm";
import { userHasUpdatedDetails } from "@/app/data/userData";

export default async function Page() {

    const { getUser } = getKindeServerSession();

    const user = await getUser();
    if (!user) redirect('/signin')

    const userHasDetails = await userHasUpdatedDetails(user.id);
    if (userHasDetails) redirect('/');

    const handlePlaceholder = user.email?.split('@')[0];
    const namePlaceHolder = user.given_name + ' ' + user.family_name;

    return (
        <div className="border p-6 rounded-md mt-6">
            <h2 className="text-emerald-600 font-medium text-md">We need some details before you continue</h2>
            <DetailsForm
                handlePlaceholder={handlePlaceholder ? handlePlaceholder : ''}
                namePlaceHolder={namePlaceHolder}
                kindeId={user.id} />
        </div>
    )
}