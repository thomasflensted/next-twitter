import { IoPerson } from "react-icons/io5"
import NavItem from "./NavItem"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { getProfileFromId } from "@/app/data/userData";

export default async function ProfileNav() {

    const { getUser } = await getKindeServerSession();
    const user = await getUser();
    if (!user) redirect('/signin');
    const { handle } = await getProfileFromId(user.id);

    return (
        <NavItem linkUrl={"/" + handle} text="Profile" >
            <IoPerson className="group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-white" />
        </NavItem >
    )
}