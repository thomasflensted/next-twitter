import Link from "next/link"
import { ReactNode } from "react"

const NavItem = ({ linkUrl, text, children }: { linkUrl: string, text: string, children: ReactNode }) => {
    return (
        <Link href={linkUrl} className="group flex gap-2 items-center cursor-pointer px-4 py-2 rounded-full hover:bg-gray-100 transition-colors ease-out dark:hover:bg-neutral-700">
            {children}
            <h2 className="font-medium text-md group-hover:text-emerald-600 transition-colors duration-200 dark:text-white dark:group-hover:text-white">{text}</h2>
        </Link>
    )
}
export default NavItem