import { constructGoogleMapsUrl } from "@/app/lib/helpers"
import { FaMapPin } from "react-icons/fa6"

const ProfileLocation = ({ location }: { location: string }) => {
    return (
        <div className="flex gap-2 items-center">
            <FaMapPin className="text-xs text-emerald-600" />
            <a target="_blank" href={constructGoogleMapsUrl(location)} className="text-emerald-600 font-light text-xs">{location}</a>
        </div>
    )
}
export default ProfileLocation