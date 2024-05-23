import { getProfileImages } from "@/app/data/dataUser";
import { RxAvatar } from "react-icons/rx";

export default async function ProfileImage({ handle }: { handle: string }) {

    const images = await getProfileImages(handle);

    return (
        <div className="w-full h-44 bg-gray-200 relative">
            {images.cover_photo && <img src={images.cover_photo} className="w-full h-full object-cover"></img>}
            <div className="w-[138px] h-[138px] rounded-full absolute bg-white translate-y-1/2 bottom-0 right-4 shadow-md flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white overflow-hidden flex items-center justify-center relative">
                    {images.profile_pic
                        ? <img className="h-full" src={images.profile_pic}></img>
                        : <RxAvatar className="text-emerald-600 text-7xl" />}
                </div>
            </div>
        </div>
    )
}