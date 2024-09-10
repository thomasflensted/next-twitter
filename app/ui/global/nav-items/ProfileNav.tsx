import { IoPerson } from "react-icons/io5"
import NavItem from "./NavItem"
import { createClient } from "@/utils/supabase/server";
import { getUserId } from "@/app/lib/api/users";
import { redirect } from "next/navigation";

export default async function ProfileNav() {

    const supabase = createClient();
    const userId = await getUserId();
    const { data } = await supabase
        .from('accounts')
        .select('handle')
        .eq('user_id', userId)
        .single()

    if (!data) redirect('/signin');

    return (
        <NavItem linkUrl={`/${data.handle}`} text="Profile" >
            <IoPerson className="group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-white" />
        </NavItem >
    )
}