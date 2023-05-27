import Image from "next/image";
import {useEffect, useState} from "react";
import {MdDesignServices, MdOutlineCode, MdArrowForwardIos,
    MdRocketLaunch, MdAnalytics, MdLightbulb} from "react-icons/md";
import {IoExtensionPuzzleSharp, IoArrowForwardSharp} from "react-icons/io5";
import {HiPaintBrush} from "react-icons/hi2";
import {BsFillGearFill, BsFillClipboardCheckFill} from "react-icons/bs";
import {SiMaterialdesignicons} from "react-icons/si";
import {FaLaptopCode, FaCompass} from "react-icons/fa";
import Header from "../components/header";
import Footer from "../components/footer";
import { AnimationOnScroll } from "react-animation-on-scroll";

import 'animate.css'
import Head from "next/head";

const Home = () => {
    const [opacity, setOpacity] = useState(100);

    useEffect(() => {
        const onScroll = () => {
            setOpacity((opacity - (window.scrollY / 5)) / 100)
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    return (
        <div className="font-mont">
            <Head>
                <style>
                    @import url(&apos;https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap&apos;);
                </style>
                <title>Joshua Oguh</title>
            </Head>
            <Header />
            <main>
                <section className={'fixed h-screen flex gap-16 flex-col w-full relative bg-hero bg-cover bg-[#0c41f0]/75 bg-blend-multiply flex flex-row items-center justify-center'}>
                    <h1 className={`z-10 xl:text-6xl text-5xl font-mont w-4/5 xl:w-3/5 text-center font-bold animate__animated animate__backInDown`} style={{color: `rgba(255, 255, 255, ${opacity}`}}>Hi! I&apos;m Joshua Oguh. <br /> I provide innovative web solutions to grow your business.</h1>
                    <h2 className={'text-white font-mont text-2xl z-10 animate__animated animate__backInDown'} style={{color: `rgba(255, 255, 255, ${opacity}`}}>Scroll to see what I offer.</h2>
                </section>
                <section className="bg-white  px-12">
                    <div className="pt-16 md:px-8">
                        <AnimationOnScroll animateOnce className={"animate__animated"} animateIn={"animate__fadeInUp"}>
                            <h2 className="xl:text-6xl text-5xl text-black font-semibold xl:w-1/2 w-full text-center xl:text-left">My goal is to build brands.</h2>
                        </AnimationOnScroll>
                        <div>
                            <div className="xl:grid xl:grid-cols-4 flex flex-col mt-16 gap-8">
                                <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated xl:col-span-1 row-span-1 border border-gray-800 rounded p-8">
                                    <h2 className="text-4xl text-black font-semibold">Design</h2>
                                    <p className="text-black mt-4 text-xl"> I prioritize UX
                                        and create engaging interfaces that leave a lasting impression. The designs are
                                        responsive and intuitive, ensuring your website looks and functions
                                        flawlessly on any device.
                                    </p>
                                    <div className="rounded-full bg-blue-300 w-fit p-4 mt-8">
                                        <MdDesignServices className={'text-4xl'} />
                                    </div>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateOnce animateIn="animate__fadeInUp" className="xl:animate__animated col-span-1 row-span-1 border border-gray-800 rounded p-8">
                                    <h2 className="text-4xl text-black font-semibold">Develop</h2>
                                    <p className="text-black mt-4 text-xl">I bring your vision to life by
                                        leveraging the latest technologies and best practices, ensuring your
                                        website is fast, secure, and scalable. The result is a performant website
                                        that drives conversions.
                                    </p>
                                    <div className="rounded-full bg-pink-300 w-fit p-4 mt-8">
                                        <MdOutlineCode className={'text-4xl'} />
                                    </div>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated xl:col-span-1 row-span-1 border border-gray-800 rounded p-8">
                                    <h2 className="text-4xl text-black font-semibold">Hosting</h2>
                                    <p className="text-black mt-4 text-xl">I provide reliable and
                                        secure hosting to keep your website online and performing at its
                                        best, with a guarantee of fast loading times, proactive security measures, and regular
                                        backups for peace of mind.
                                    </p>
                                    <div className="rounded-full bg-orange-300 w-fit p-4 mt-8">
                                        <MdRocketLaunch className={'text-4xl'} />
                                    </div>
                                </AnimationOnScroll>
                                <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated xl:col-span-1 row-span-1 border border-gray-800 rounded p-8">
                                    <h2 className="text-4xl text-black font-semibold">Analytics</h2>
                                    <p className="text-black mt-4 text-xl">I implement comprehensive
                                        analytics solutions to track and analyze your website&apos;s performance.
                                        I leverage data-driven insights to optimize your online presence
                                        and drive growth.
                                    </p>
                                    <div className="rounded-full bg-green-300 w-fit p-4 mt-8">
                                        <MdAnalytics className={'text-4xl'} />
                                    </div>
                                </AnimationOnScroll>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white px-12">
                    <div className="border-t-2 border-gray-300 mt-24" />
                    <div className="pt-8 md:px-8">
                        <AnimationOnScroll animateOnce className={"animate__animated"} animateIn={"animate__fadeInUp"}>
                            <h3 className="md:text-6xl text-3xl md:py-4 font-bold text-black text-center md:text-left">The problem</h3>
                        </AnimationOnScroll>
                        <AnimationOnScroll animateOnce className={"animate__animated"} animateIn={"animate__fadeInUp"}>
                            <p className="text-center md:text-left text-black mt-4 text-xl md:text-2xl xl:w-2/3">In web development,
                                businesses face various challenges that hinder their online success. From outdated designs
                                to slow load times, these obstacles impact user engagement and business growth.
                                Identifying and overcoming these common pain points is essential for building a strong online presence.
                            </p>
                        </AnimationOnScroll>
                    </div>
                    <div className="xl:grid xl:grid-cols-2 xl:gap-8 flex flex-col md:px-8 pt-16">
                        <div className="xl:col-span-1 flex flex-col gap-4 md:gap-0 mb-4 md:mb-0">
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated flex flex-row items-center">
                                <IoExtensionPuzzleSharp className={'text-xl text-orange-300'} />
                                <p className="text-black text-lg md:text-xl ml-4">Your website has slow load times</p>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated flex flex-row items-center xl:mt-8">
                                <IoExtensionPuzzleSharp className={'text-xl text-yellow-300'} />
                                <p className="text-black text-lg md:text-xl ml-4">Your website&apos;s design is outdated</p>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated flex flex-row items-center xl:mt-8">
                                <IoExtensionPuzzleSharp className={'text-xl text-blue-300'} />
                                <p className="text-black text-lg md:text-xl ml-4">Your website has poor mobile optimization </p>
                            </AnimationOnScroll>
                        </div>
                        <div className="xl:col-span-1 flex flex-col gap-4 md:gap-0">
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated flex flex-row items-center">
                                <IoExtensionPuzzleSharp className={'text-xl text-green-300'} />
                                <p className="text-black text-lg md:text-xl ml-4">Your website lacks mobile-first design</p>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated flex flex-row items-center xl:mt-8">
                                <IoExtensionPuzzleSharp className={'text-xl text-pink-300'} />
                                <p className="text-black text-lg md:text-xl ml-4">Lack of search engine optimization</p>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </section>
                <section className="bg-white px-12 mt-12">
                    <div className="py-8 xl:py-16 md:px-8 md:grid md:grid-cols-7 flex flex-col-reverse">
                        <div className="md:col-span-4 md:mt-0 mt-8">
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated bg-gradient-to-b from-blue-600 to-indigo-800 rounded-xl mt-4 md:w-3/4 w-full p-8">
                                <div className="flex flex-row items-center">
                                    <MdLightbulb className={'text-3xl text-white'} />
                                    <h4 className="text-white ml-4 text-3xl font-medium">Content analysis</h4>
                                </div>
                                <p className="text-gray-200 mt-4">
                                    Maximize the impact of your content with a data-driven analysis that helps you target the right audience, drive organic traffic, and create brand trust.</p>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated bg-gradient-to-b from-indigo-800 to-violet-700 rounded-xl md:w-3/4 md:ml-24 w-full mt-12 p-8">
                                <div className="flex flex-row items-center">
                                    <HiPaintBrush className={'text-3xl text-white'} />
                                    <h4 className="text-white ml-4 text-3xl font-medium">Website redesign</h4>
                                </div>
                                <p className="text-gray-200 mt-4">
                                    Elevate your online presence and attract more customers with a stunning website redesign that drives conversions and sets you apart from competitors
                                </p>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated bg-gradient-to-b from-violet-700 to-purple-900 rounded-xl w-full md:w-3/4 mt-12 p-8">
                                <div className="flex flex-row items-center">
                                    <BsFillGearFill className={'text-3xl text-white'} />
                                    <h4 className="text-white ml-4 text-3xl font-medium">Performance Optimization</h4>
                                </div>
                                <p className="text-gray-200 mt-4">
                                    Elevate your online presence and attract more customers with a stunning website redesign that drives conversions and sets you apart from competitors.
                                </p>
                            </AnimationOnScroll>
                        </div>
                        <div className="md:col-span-3 md:px-8">
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated w-full md:w-fit">
                                <h3 className="md:text-6xl text-3xl font-bold text-black text-center md:text-left">The solution</h3>
                                <p className="text-black mt-8 text-2xl text-center md:text-left">Save time as a
                                    busy business owner with simplified web development solutions tailored to your needs.
                                    From captivating website designs to efficient development practices,
                                    I handle the technical aspects, allowing you to focus on your business.
                                </p>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </section>
                <section className="bg-white px-12">
                    <div className="border-t-2 border-gray-300 mt-12" />
                    <div className="py-8 md:px-8">
                        <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated">
                            <h3 className="md:text-6xl text-5xl md:py-4 text-black font-semibold">My recent works</h3>
                        </AnimationOnScroll>
                    </div>
                    <div className="flex flex-col justify-center md:px-8">
                        <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated">
                            <div className="grid md:grid-cols-11 md:grid-rows-1 grid-rows-11 border border-gray-300
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
                                <div className="md:col-span-6 row-span-3 bg-purple-100 flex flex-row justify-center items-center">
                                    <div className="w-5/6 h-3/4 relative group-hover:scale-110 transition-all">
                                        <Image src={"/orbitxlm.png"} layout={'fill'} objectFit={'contain'}/>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    <div className="flex flex-col justify-center mt-16 md:px-8">
                        <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated">
                            <div className="grid md:grid-cols-11 md:grid-rows-1 grid-rows-11 border border-gray-300
                                                   h-[32rem] cursor-pointer group transition-all hover:scale-95">
                                <div className="md:col-span-6 row-span-3 bg-blue-100 flex flex-row justify-center items-center">
                                    <div className="w-5/6 h-3/4 relative group-hover:scale-110 transition-all">
                                        <Image src={"/tidythoughts2.png"} layout={'fill'} objectFit={'contain'}/>
                                    </div>
                                </div>
                                <div className="md:col-span-5 row-span-8 px-8 flex flex-col justify-center order-last md:order-none">
                                    <h4 className="md:text-5xl text-4xl text-bold group-hover:text-blue-600 transition-all">Tidy Thoughts</h4>
                                    <p className="text-gray-500 mt-4 md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Maecenas eros felis, pellentesque eget tincidunt quis, iaculis at elit.</p>
                                    <div className="flex flex-row mt-8">
                                        <div className="flex flex-row items-center">
                                            <span className="text-2xl font-medium underline">View project</span>
                                            <IoArrowForwardSharp className={'text-2xl ml-2 group-hover:ml-8 transition-all'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimationOnScroll>
                    </div>
                </section>
                <section className="bg-white  px-12">
                    <div className="border-t-2 border-gray-300 mt-24" />
                    <div className="py-8 px-4 text-center md:px-8">
                        <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated">
                            <h3 className="text-6xl text-black font-semibold py-4">My Process</h3>
                            <p className="text-black mt-4 text-xl md:px-64">With a
                                streamlined approach, I efficiently plan and execute web development projects.
                                By closely collaborating with you, I transform your vision into seamless web experiences.
                                Utilizing modern technologies and best practices, my process ensures efficient and
                                successful web development from start to finish.
                            </p>
                        </AnimationOnScroll>
                        <div className="flex flex-col md:flex-row justify-center static mt-12 gap-16 md:gap-2">
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated
                            flex flex-col items-center">
                                <div className="bg-sky-200 rounded-full w-48 h-48 flex flex-col justify-center items-center">
                                    <FaCompass className="text-6xl text-sky-500" />
                                </div>
                                <div className="px-8">
                                    <h4 className="text-3xl font-bold mt-4">Strategize</h4>
                                    <p className="text-gray-500 mt-4"> I conduct in-depth research and analysis to create
                                        a tailored plan that aligns with your goals and target audience, ensuring a
                                        solid foundation for your web development project.</p>
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated
                            flex flex-col items-center">
                                <div className="bg-blue-200 rounded-full w-48 h-48 flex flex-col justify-center items-center">
                                    <SiMaterialdesignicons className="text-6xl text-blue-500" />
                                </div>
                                <div className="px-8">
                                    <h4 className="text-3xl font-bold mt-4">Design</h4>
                                    <p className="text-gray-500 mt-4">I combine creativity and user-centric principles
                                        to craft captivating and intuitive interfaces that enhance the user experience,
                                        delivering visually appealing designs that leave a lasting impression.</p>
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated
                            flex flex-col items-center">
                                <div className="bg-indigo-200 rounded-full w-48 h-48 flex flex-col justify-center items-center">
                                    <FaLaptopCode className="text-6xl text-indigo-500" />
                                </div>
                                <div className="px-8">
                                    <h4 className="text-3xl font-bold mt-4">Develop</h4>
                                    <p className="text-gray-500 mt-4">Utilizing the latest technologies, I meticulously
                                        code and develop your website, ensuring seamless functionality and optimal
                                        performance for an exceptional user experience</p>
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated
                            flex flex-col items-center">
                                <div className="bg-violet-200 rounded-full w-48 h-48 flex flex-col justify-center items-center">
                                    <MdRocketLaunch className="text-6xl text-violet-500" />
                                </div>
                                <div className="px-8">
                                    <h4 className="text-3xl font-bold mt-4">Launch</h4>
                                    <p className="text-gray-500 mt-4">After rigorous testing and optimization, I ensure
                                        a smooth website launch, assisting with domain setup and hosting configurations,
                                        so your website is ready to make an impactful online debut.</p>
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated
                            flex flex-col items-center">
                                <div className="bg-purple-200 rounded-full w-48 h-48 flex flex-col justify-center items-center">
                                    <BsFillClipboardCheckFill className="text-6xl text-purple-500" />
                                </div>
                                <div className="px-8">
                                    <h4 className="text-3xl font-bold mt-4">Maintain</h4>
                                    <p className="text-gray-500 mt-4">I provide ongoing support, updates, analytics,
                                        and maintenance to keep your website secure, up-to-date,
                                        and aligned with your evolving needs, ensuring its long-term success and performance</p>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </section>
                <section className="bg-white px-12 mb-24 mt-8">
                    <div className="border-t-2 border-gray-300 mt-18" />
                    <div className="grid md:grid-cols-3 grid-rows-3 md:grid-rows-1 mt-16 px-8">
                        <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className="animate__animated row-span-2 md:col-span-2">
                            <h3 className="text-6xl font-semibold">Interested in working together?</h3>
                            <p className="text-xl mt-8">I&apos;d love to hear from you and learn more about your business. <br/> Send me a message to discuss how I can help you achieve your web development goals and take your online presence to the next level.</p>
                        </AnimationOnScroll>
                        <div className="row-span-1 md:col-span-1 flex flex-row justify-center items-center">
                            <AnimationOnScroll animateOnce animateIn={"animate__fadeInUp"} className={"animate__animated"}>
                                <a className="flex flex-col h-32 w-32 items-center justify-center
                        border-2 border-black rounded-full transition-all hover:bg-black group cursor-pointer"
                                   href={"/contact"}>
                                    <MdArrowForwardIos className="text-6xl text-black font-light group-hover:text-white" />
                                </a>
                            </AnimationOnScroll>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>



)
}

export default Home;
