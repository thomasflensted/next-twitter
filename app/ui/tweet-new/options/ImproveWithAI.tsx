'use client'

import { useContext, useState } from "react"
import { BsStars } from "react-icons/bs"
import { TextContext } from "../NewTweetForm"
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import DropdownAI from "./DropdownAI"
import { fixTextWithAI, improveWithAI, queryAI } from "@/app/data/actions/aiActions";

const ImproveWithAI = () => {

    const [isLoading, setIsLoading] = useState(false);

    const textContext = useContext(TextContext);
    if (!textContext) return;
    const { text, setText } = textContext;


    const handleAI = async (type: 'improve' | 'query' | 'fix') => {
        setIsLoading(true)
        let res = '';
        if (type === 'improve') {
            const improvedText = await improveWithAI(text);
            if (!improvedText) return;
            res = improvedText;
        } else if (type === 'query') {
            const queryResult = await queryAI(text);
            if (!queryResult) return;
            res = queryResult;
        } else if (type === 'fix') {
            const fixedtext = await fixTextWithAI(text);
            if (!fixedtext) return;
            res = fixedtext;
        }
        setText(res);
        setIsLoading(false)
    }

    return (
        <Dropdown.Root>
            <Dropdown.Trigger className="outline-none">
                <BsStars
                    title="Improve with AI"
                    className={`text-emerald-500 text-lg cursor-pointer hover:text-emerald-600 ${isLoading ? 'animate-pulse' : ''}`} />
            </Dropdown.Trigger>
            <DropdownAI handleAI={handleAI} />
        </Dropdown.Root>
    )
}
export default ImproveWithAI