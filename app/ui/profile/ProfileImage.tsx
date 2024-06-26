import { getProfileImages } from "@/app/data/dataUser";
import Image from "next/image";
import { RxAvatar } from "react-icons/rx";

export default async function ProfileImage({ handle }: { handle: string }) {

    const images = await getProfileImages(handle);

    return (
        <div className="w-full h-44 bg-gray-200 relative">
            {images.cover_photo && <Image src={images.cover_photo} className="object-cover" fill={true} alt="Cover Photo" />}
            <div className="w-[138px] h-[138px] rounded-full absolute bg-white translate-y-1/2 bottom-0 right-4 shadow-md flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center relative">
                    {images.profile_pic
                        ? <Image className="object-cover" src={images.profile_pic} alt="Profile Picture" fill={true} />
                        : <RxAvatar className="text-emerald-600 text-7xl" />}
                </div>
            </div>
        </div>
    )
}