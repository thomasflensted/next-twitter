import Image from "next/image"
import Link from "next/link"

const ProfilePicSmall = ({ image, handle }: { image: string, handle: string }) => {
    return (
        <Link href={'/' + handle} className="bg-white h-12 w-12 shadow rounded-full relative dark:bg-neutral-700 dark:border-0 overflow-hidden flex-shrink-0">
            <Image src={image} alt="Profile Picture" className="object-cover" fill={true} />
        </Link>
    )
}
export default ProfilePicSmall