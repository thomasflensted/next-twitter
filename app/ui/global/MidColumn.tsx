import { ReactNode } from "react";

const MidColumn = ({ children }: { children: ReactNode }) => {

    return (
        <main className="border flex-grow border-gray-200 overflow-y-scroll">
            {children}
        </main>
    )
}
export default MidColumn