'use client'

import { HiDotsHorizontal } from "react-icons/hi";
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { deleteTweet } from "@/app/lib/actions/tweets";


const DeleteTweetBtn = ({ id, imageUrl }: { id: number, imageUrl: string | null }) => {
    return (
        <Dropdown.Root>
            <Dropdown.Trigger className="outline-none">
                <HiDotsHorizontal className="text-xs text-emerald-500 cursor-pointer" />
            </Dropdown.Trigger>
            <Dropdown.Portal>
                <Dropdown.Content className="bg-white p-1 shadow-md rounded flex flex-col gap-1">
                    <Dropdown.Item onClick={() => deleteTweet(imageUrl, id)} className="text-xs font-medium cursor-pointer rounded text-red-600 px-2 py-1 outline-none hover:bg-red-50">
                        Delete Tweet
                    </Dropdown.Item>
                    <Dropdown.DropdownMenuArrow className="fill-white" />
                </Dropdown.Content>
            </Dropdown.Portal>
        </Dropdown.Root>
    )
}
export default DeleteTweetBtn