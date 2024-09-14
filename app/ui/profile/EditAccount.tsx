import { getUserId } from "@/app/lib/api/users";
import AccountForm from "../forms/AccountForm"
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";

const EditAccount = async () => {

    const userId = await getUserId();
    const supabase = createClient();
    const { data, error } = await supabase
        .from('accounts')
        .select('*')
        .eq('user_id', userId)
        .single()

    if (error) return (
        <p className="text-red-500 font-medium">Something went wrong</p>
    )

    if (!data) return notFound();

    return (
        <AccountForm
            name={data.name}
            handle={data.handle}
            bio={data.bio}
            website={data.website}
            location={data.location}
            profile_pic={data.profile_pic}
            cover_photo={data.cover_photo} />
    )
}
export default EditAccount