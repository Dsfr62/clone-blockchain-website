import { ReactNode } from "react"
import Navbar from "../navbar"

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="h-screen w-full px-12 pt-2">
            <Navbar />
            { children }
        </div>
    )
}

export default Layout