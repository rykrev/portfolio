import {IoArrowForwardSharp} from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-800 md:px-16 px-4">
            <div className="grid grid-cols-2 py-12">
                <Link className="flex flex-col justify-center" href="/">
                    <h1 className="md:text-4xl font-bold text-white text-2xl">Joshua Oguh</h1>
                    <p className="md:text-xl text-lg text-gray-400 mt-2">Freelance Web Designer and Developer.</p>
                </Link>
                <div className="flex flex-col justify-center px-8">
                    <div className="flex flex-row group cursor-pointer items-center">
                        <h2 className="md:text-5xl text-3xl text-white font-bold">Get in touch</h2>
                        <IoArrowForwardSharp className={'md:text-5xl text-5xl ml-2 group-hover:ml-8 transition-all text-blue-500'} />
                    </div>
                    <div className="flex md:flex-row flex-col md:gap-4 gap-2 md:mt-8 mt-4 justify-between">
                        <div className="flex flex-col justify-center">
                            <p className="text-gray-300 text-xl">Email me:</p>
                            <Link className="text-white md:text-xl underline text-lg break-words" href="mailto:joshuaoguh12@gmail.com">joshuaoguh12@gmail.com</Link>
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-gray-300 text-xl">Call me:</p>
                            <p className="text-white text-xl underline">(443)-252-3202</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full border-gray-700 border-t-2 pb-8" />
            <div className="flex md:flex-row flex-col justify-between pb-8">
                <div className="flex flex-row gap-4 justify-center md:justify-normal">
                    <Link href={"/"} className="text-white text-xl">Home</Link>
                    <Link href={"/portfolio"} className="text-white text-xl">Portfolio</Link>
                    <Link href={"/contact"} className="text-white text-xl">Contact</Link>
                </div>
                <p className="text-white text-xl text-center md:text-left mt-4 md:mt-0">© 2023 Joshua Oguh. All rights reserved | Powered by NextJS</p>
            </div>
        </footer>
    )
}

export default Footer
