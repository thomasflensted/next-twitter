import Link from "next/link"

const ProfilePicSmall = ({ image, handle }: { image: string, handle: string }) => {
    return (
        <Link href={'/' + handle} className="bg-white h-12 w-12 shadow rounded-full dark:bg-neutral-700 dark:border-0 overflow-hidden flex-shrink-0">
            <img className='h-full' src={image} alt="" />
        </Link>
    )
}
export default ProfilePicSmall