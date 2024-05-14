'use client'
import * as Dropdown from '@radix-ui/react-dropdown-menu';

type Props = {
    handleAI: (type: 'improve' | 'query' | 'fix') => Promise<void>
}

const DropdownAI = ({ handleAI }: Props) => {
    return (
        <Dropdown.Portal>
            <Dropdown.Content sideOffset={5} className="bg-white p-1 shadow-md rounded flex flex-col gap-1 text-center">
                <Dropdown.Item
                    onClick={() => handleAI('improve')}
                    className="text-xs font-medium cursor-pointer rounded text-emerald-600 px-2 py-1 outline-none hover:bg-emerald-50">
                    Improve Text With AI
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleAI('query')}
                    className="text-xs font-medium cursor-pointer rounded text-emerald-600 px-2 py-1 outline-none hover:bg-emerald-50">
                    Query AI With Text
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => handleAI('fix')}
                    className="text-xs font-medium cursor-pointer rounded text-emerald-600 px-2 py-1 outline-none hover:bg-emerald-50">
                    Fix Typos And Punctuation
                </Dropdown.Item>
                <Dropdown.DropdownMenuArrow className="fill-white" />
            </Dropdown.Content>
        </Dropdown.Portal >
    )
}
export default DropdownAI