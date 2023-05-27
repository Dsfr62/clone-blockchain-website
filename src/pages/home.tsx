import Layout from "../components/global/layout"
import homeBg from "../../public/home-bg.png"

function HomePage() {
    return (
        <Layout>
            <div className="flex flex-col w-full h-[85%] px-0 lg:px-12 pt-2 md:pt-4">
                <div className="w-full flex flex-col md:flex-row md:items-center justify-center h-full gap-2">
                    <div className="flex flex-col w-full md:w-[70%]">
                        <p className="text-5xl text-ellipsis font-semibold w-[80%] xl:w-[60%]">
                            <span className="underline decoration-yellow-1 decoration-[0.2rem]">
                                Secure</span> Your Data with Our Blockchain Cloud 
                                <span className="underline decoration-purple-1 decoration-[0.2rem]">Storage</span>
                        </p>
                        <div className="flex gap-8 mt-10">
                            <button type="button" className="py-3 xl:py-4 px-8 xl:px-12 bg-black text-white hover:bg-opacity-90 ease-linear transition-all">Get started</button>
                            <button type="button" className="p-3 xl:p-4 font-medium hover:bg-black hover:text-white ease-linear transition-all">Request a demo</button>
                        </div>
                    </div>
                    <img className="invisible hidden md:visible md:flex w-[35%]" src={homeBg} alt="home-background-img by:https://www.linkedin.com/in/raulvictor772/" />
                </div>
                <div className="w-full h-[30%] flex flex-col md:flex-row gap-2">
                    <div className="flex w-[65%] items-center">
                        <div className="px-6 py-2">
                            <p className="text-2xl font-semibold">20k+</p>
                            <p className="text-gray-400">users</p>
                        </div>
                        <div className="px-6 py-2 border-x border-black">
                            <p className="text-2xl font-semibold">1M+</p>
                            <p className="text-gray-400">uploaded files</p>
                        </div>
                        <div className="px-6 py-2">
                            <p className="text-2xl font-semibold">1 PB</p>
                            <p className="text-gray-400">storage capacity</p>
                        </div>
                    </div>
                    <p 
                    className="w-full md:w-[35%] text-[0.6rem] xl:text-[0.8rem] font-medium px-4 pt-6 pb-4 md:py-2 text-ellipsis border-t md:border-t-0 md:border-l border-black text-ellipsis self-center">
                        Our platform offers a secure, decentralized approach to data storage, ensuring your sensitive data is protected from unauthorized access and tampering. With our cutting-edge technology, you can trust that your data is safe and secure.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default HomePage