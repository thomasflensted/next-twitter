import Link from "next/link"
import { RxAvatar } from "react-icons/rx"

const ProfilePicColumn = ({ handle, image }: { handle: string, image: string }) => {

    return (
        <Link href={'/' + handle} className="h-full w-1/6 flex flex-col items-center p-4">
            <div className="bg-white h-12 w-12 shadow rounded-full dark:bg-neutral-700 dark:border-0 overflow-hidden flex items-center justify-center">
                {image
                    ? <img className='h-full' src={image} alt="" />
                    : <RxAvatar className="text-emerald-600 text-3xl" />}
            </div>
        </Link>
    )
}
export default ProfilePicColumn