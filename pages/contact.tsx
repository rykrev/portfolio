import {IoArrowForwardSharp} from "react-icons/io5";
import Footer from "../components/footer";
import Header from "../components/header";
import Link from "next/link";
import Head from "next/head";

const Contact = () => {
    return (
        <div>
            <Head>
                <style>
                    @import url(&apos;https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap&apos;);
                </style>
                <title>Joshua Oguh</title>
            </Head>
            <Header />
            <div className="md:h-screen md:w-screen md:grid md:grid-cols-11 flex flex-col md:py-8 py-12 md:px-16 px-4 md:-mt-16">
                <div className="md:col-span-6">
                    <div className="h-full w-full flex flex-col justify-center">
                        <h1 className="md:text-6xl font-bold text-4xl">Get in contact</h1>
                        <p className="text-2xl mt-4">I&apos;m currently looking for new opportunities, my inbox is always open.
                            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
                        <Link href={'mailto:joshuaoguh12@gmail.com'}>
                            <span className="md:mt-8 mt-4 md:text-4xl text-2xl font-light
                    underline underline-offset-8 hover:text-gray-600 transition-all w-auto md:font-normal font-medium">
                                joshuaoguh12@gmail.com
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="md:col-span-5 md:px-8 px-2 mt-16 md:mt-0">
                    <form className="h-full w-full flex flex-col justify-center">
                        <input className={'bg-gray-100 w-full p-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-xl'} placeholder={'Name'} />
                        <input className={'bg-gray-100 w-full mt-8 p-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-xl'} placeholder={'Email'} />
                        <textarea className={'bg-gray-100 w-full mt-8 p-4 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 text-xl'} rows={5} placeholder={'Message'} />
                        <button type={"submit"} className="flex flex-row items-center cursor-pointer mt-4 group">
                            <span className="text-2xl font-medium underline group-hover:text-gray-500 transition-all">Send</span>
                            <IoArrowForwardSharp className={'text-2xl ml-2 group-hover:ml-8 transition-all'} />
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
