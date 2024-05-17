import Image from "next/image"
import Link from "next/link"

const ProfilePicColumn = ({ handle }: { handle?: string }) => {
    return handle
        ? (<Link href={'/' + handle} className="h-full w-1/6 flex flex-col items-center p-4">
            <div className="bg-white h-12 w-12 shadow rounded-full dark:bg-neutral-700 dark:border-0 overflow-hidden">
                <Image src='/avatar.jpg' alt="Avatar" width={100} height={100} />
            </div>
        </Link>)
        : (<div className="h-full w-1/6 flex flex-col items-center p-4">
            <div className="bg-white h-12 w-12 shadow rounded-full dark:bg-neutral-700 dark:border-0 overflow-hidden">
                <Image src='/avatar.jpg' alt="Avatar" width={100} height={100} />
            </div>
        </div>)
}
export default ProfilePicColumn