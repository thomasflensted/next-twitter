import { ReactNode } from "react"

const Body = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-min flex items-center justify-center">
            {children}
        </div>
    )
}
export default Body