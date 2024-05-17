import { FaLink } from "react-icons/fa6"

const ProfileWebsite = ({ url }: { url: string }) => {

    const link = url.startsWith('http') ? url : 'http://' + url;

    return (
        <div className="flex gap-2 items-center">
            <FaLink className="text-xs text-emerald-600" />
            <a href={link} target="_blank" className="text-emerald-600 font-light text-xs">{url}</a>
        </div>
    )
}

export default ProfileWebsite