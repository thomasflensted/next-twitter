import Link from "next/link"

const ProfilePicColumn = ({ handle, image }: { handle: string, image: string }) => {

    return (
        <Link href={'/' + handle} className="h-full w-1/6 flex flex-col items-center p-4">
            <div className="bg-white h-12 w-12 shadow rounded-full dark:bg-neutral-700 dark:border-0 overflow-hidden">
                <img className='h-full' src={image} alt="" />
            </div>
        </Link>
    )
}
export default ProfilePicColumn