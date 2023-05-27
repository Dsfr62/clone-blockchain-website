import { useState } from "react"


const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className="w-full h-20 border-b-2 border-black flex justify-between items-center px-2 lg:px-6">
            <p className="w-[15%] xl:w-[20%] cursor-pointer hover:animate-pulse font-medium">Logo</p>
            <div className={`
            ${nav ? 'animation-fade-in-12 visible fixed right-4 top-20 mt-1.5 w-[50%] bg-black text-white ' : 'hidden invisible'}
            flex flex-col rounded-b-md lg:flex lg:flex-row lg:visible`
            }>
                <p className="navbar-option border-l-2">About Us</p>
                <p className="navbar-option border-l-2">Services</p>
                <p className="navbar-option border-l-2">Pricing</p>
                <p className="navbar-option border-l-2">Resources</p>
                <p className="navbar-option border-x-0 lg:border-l-2 ">Sign In</p>
            </div>
            <svg 
            onClick={() => setNav(!nav)}
            className={`visible lg:invisible lg:hidden w-7 h-7 text-black`}
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" 
                d={!nav ? "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" : "M6 18L18 6M6 6l12 12"} />
            </svg>
        </div>
    )
}


export default Navbar