'use client'

import { deleteTweet } from "@/app/data/actions";
import { FaRegTrashCan } from "react-icons/fa6";

const DeleteTweetBtn = ({ id }: { id: number }) => {
    return (
        <FaRegTrashCan onClick={() => deleteTweet(id)} className="text-xs text-emerald-500 cursor-pointer" />
    )
}
export default DeleteTweetBtn