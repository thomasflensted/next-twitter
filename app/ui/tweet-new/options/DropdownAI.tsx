'use client'
import * as Dropdown from '@radix-ui/react-dropdown-menu';

const DropdownAI = ({ handleImprove, handleQuery }: { handleImprove: () => Promise<void>, handleQuery: () => Promise<void> }) => {
    return (
        <Dropdown.Portal>
            <Dropdown.Content sideOffset={5} className="bg-white p-1 shadow-md rounded flex flex-col gap-1">
                <Dropdown.Item
                    onClick={handleImprove}
                    className="text-xs font-medium cursor-pointer rounded text-emerald-600 px-2 py-1 outline-none hover:bg-emerald-50">
                    Improve Text With AI
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={handleQuery}
                    className="text-xs font-medium cursor-pointer rounded text-emerald-600 px-2 py-1 outline-none hover:bg-emerald-50">
                    Query AI With Text
                </Dropdown.Item>
                <Dropdown.DropdownMenuArrow className="fill-white" />
            </Dropdown.Content>
        </Dropdown.Portal>
    )
}
export default DropdownAI