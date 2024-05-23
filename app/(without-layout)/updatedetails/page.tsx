import { redirect } from "next/navigation";
import DetailsForm from "@/app/ui/forms/DetailsForm";
import { authenticateAndGetKindeProfile, getInitialUserProfile } from "@/app/data/dataUser";

export default async function Page() {

    const user = await authenticateAndGetKindeProfile();
    const profile = await getInitialUserProfile(user.id);
    if (profile) redirect('/')

    const handlePlaceholder = user.email?.split('@')[0];
    const namePlaceHolder = user.given_name + ' ' + user.family_name;

    return (
        <div className="border p-6 rounded-md mt-6">
            <h2 className="text-emerald-600 font-medium text-md">We need some details before you continue</h2>
            <DetailsForm
                handlePlaceholder={handlePlaceholder ? handlePlaceholder : ''}
                namePlaceHolder={namePlaceHolder} />
        </div>
    )
}