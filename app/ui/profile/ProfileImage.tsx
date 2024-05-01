import Image from "next/image"

const ProfileImage = () => {
    return (
        <div className="w-full h-44 bg-gray-200 relative">
            <div className="w-[138px] h-[138px] rounded-full absolute bg-white translate-y-1/2 bottom-0 overflow-hidden right-4 shadow-md flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white overflow-hidden">
                    <Image src={'/avatar.jpg'} alt="avatar" width={200} height={200} />
                </div>
            </div>
        </div>
    )
}
export default ProfileImage