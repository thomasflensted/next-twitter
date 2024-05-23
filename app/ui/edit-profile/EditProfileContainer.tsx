import { getUserProfile } from "@/app/data/dataUser";
import EditProfileForm from "../forms/EditProfileForm";

export default async function EditProfileContainer({ kindeId }: { kindeId: string }) {

    const { name, handle, website, location, bio } = await getUserProfile(kindeId);

    return (
        <EditProfileForm
            name={name}
            handle={handle}
            website={website}
            location={location}
            bio={bio} />
    )
}