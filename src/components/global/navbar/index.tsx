

const Navbar = () => {
    return (
        <div className="w-[100%] h-20 border-b-2 border-black flex justify-between items-center px-6">
            <div className="flex gap-6 w-[80%] items-center">
                <p className="w-[15%] cursor-pointer hover:animate-pulse font-medium">Logo</p>
                <div className="flex w-full">
                    <p className="navbar-option">About Us</p>
                    <p className="navbar-option">Services</p>
                    <p className="navbar-option">Pricing</p>
                    <p className="navbar-option border-r-2">Resources</p>
                </div>
            </div>

            <p className="w-fit border-l-2 border-black py-4 pl-8 cursor-pointer hover:animate-pulse font-medium">Sign in</p>
        </div>
    )
}

export default Navbar