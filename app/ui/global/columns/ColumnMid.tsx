import { ReactNode } from "react";

const MidColumn = ({ children }: { children: ReactNode }) => {

    return (
        <main className="border-l border-r h-screen dark:border-neutral-700 flex-grow border-gray-200 overflow-y-scroll">
            {children}
        </main>
    )
}
export default MidColumn