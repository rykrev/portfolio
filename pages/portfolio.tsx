import Header from "../components/header";
import Footer from "../components/footer";
import Fade from "react-reveal/Fade";
import {IoArrowForwardSharp} from "react-icons/io5";
import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Portfolio = () => {
    return (
        <div>
            <Header />
            <main className="md:px-12 bg-[#f2f2f2]">
                <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className={"animate__animated"}>
                    <h1 className="text-6xl text-black font-semibold text-center pt-16">Portfolio</h1>
                </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className={"animate__animated"}>
                    <p className="text-black mt-4 text-2xl text-center px-12">Welcome to my portfolio. Here, you'll find websites I've created with care and attention to detail,
                        each one crafted to meet the unique goals and aspirations of the businesses I've had the pleasure
                        to work with. Take a moment to browse through and get a feel for the quality of work and attention
                        to detail I bring to every project.</p>
                </AnimationOnScroll>
                <div className="flex flex-col justify-center md:px-8 px-8 mt-16">
                    <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated grid md:grid-cols-11 md:grid-rows-1 grid-rows-11 border border-gray-300
                                                   h-[32rem] cursor-pointer group transition-all hover:scale-95">
                        <div className="md:col-span-5 row-span-8 px-8 flex flex-col justify-center order-last md:order-none">
                            <h4 className="md:text-5xl text-4xl text-bold group-hover:text-blue-600 transition-all">OrbitXLM</h4>
                            <p className="text-gray-500 mt-4 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas eros felis, pellentesque eget tincidunt quis, iaculis at elit.</p>
                            <div className="flex flex-row mt-8">
                                <div className="flex flex-row items-center">
                                    <span className="text-2xl font-medium underline">View project</span>
                                    <IoArrowForwardSharp className={'text-2xl ml-2 group-hover:ml-8 transition-all'} />
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-6 row-span-3 bg-blue-200 flex flex-row justify-center items-center">
                            <div className="w-5/6 h-3/4 relative group-hover:scale-110 transition-all">
                                <Image src={"/orbitxlm.png"} fill={true} layout={'fill'} objectFit={'contain'}/>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
                <div className="flex flex-col justify-center mt-16 md:px-8">
                    <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated grid md:grid-cols-11 md:grid-rows-1 grid-rows-11 border border-gray-300
                                                   h-[32rem] cursor-pointer group transition-all hover:scale-95">
                        <div className="md:col-span-5 row-span-8 px-8 flex flex-col justify-center order-last md:order-none">
                            <h4 className="md:text-5xl text-4xl text-bold group-hover:text-blue-600 transition-all">Tidy Thoughts</h4>
                            <p className="text-gray-500 md:text-xl mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Maecenas eros felis, pellentesque eget tincidunt quis, iaculis at elit.</p>
                            <div className="flex flex-row mt-8">
                                <div className="flex flex-row items-center">
                                    <span className="text-2xl font-medium underline">View project</span>
                                    <IoArrowForwardSharp className={'text-2xl ml-2 group-hover:ml-8 transition-all'} />
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-6 row-span-3 bg-green-200 flex flex-row justify-center items-center">
                            <div className="w-5/6 h-3/4 relative group-hover:scale-110 transition-all">
                                <Image src={"/tidythoughts2.png"} fill={true} layout={'fill'} objectFit={'contain'}/>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Portfolio