import Image from "next/image"
import Link from "next/link"
import { RxAvatar } from "react-icons/rx"

const ProfilePicSmall = ({ image, handle }: { image: string, handle: string }) => {
    return (
        <Link href={'/' + handle} className="bg-white items-center justify-center flex h-12 w-12 shadow rounded-full relative dark:bg-neutral-700 dark:border-0 overflow-hidden flex-shrink-0">
            {image
                ? <Image src={image} alt="Profile Picture" className="object-cover" fill />
                : <RxAvatar className="text-emerald-600 text-2xl" />
            }
        </Link>
    )
}
export default ProfilePicSmall