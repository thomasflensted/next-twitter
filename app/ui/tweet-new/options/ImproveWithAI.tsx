'use client'

import { useContext, useState } from "react"
import { BsStars } from "react-icons/bs"
import { TextContext } from "../NewTweetForm"
import { improveWithAI, queryAI } from "@/app/data/actions"
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import DropdownAI from "./DropdownAI"

const ImproveWithAI = () => {

    const textContext = useContext(TextContext);
    if (!textContext) return;
    const { text, setText } = textContext;

    const [isLoading, setIsLoading] = useState(false);

    const handleImprove = async () => {
        setIsLoading(true);
        const improvedText = await improveWithAI(text);
        if (!improvedText) return;
        setText(improvedText);
        setIsLoading(false)
    }

    const handleQuery = async () => {
        setIsLoading(true);
        const queryResult = await queryAI(text);
        if (!queryResult) return;
        setText(queryResult);
        setIsLoading(false)
    }

    return (
        <Dropdown.Root>
            <Dropdown.Trigger className="outline-none">
                <BsStars
                    onClick={handleImprove}
                    title="Improve with AI"
                    className={`text-emerald-500 text-lg cursor-pointer hover:text-emerald-600 ${isLoading ? 'animate-pulse' : ''}`} />
            </Dropdown.Trigger>
            <DropdownAI handleImprove={handleImprove} handleQuery={handleQuery} />
        </Dropdown.Root>
    )
}
export default ImproveWithAI