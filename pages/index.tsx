import Image from "next/image";
import {useEffect, useState} from "react";
import WgithubIcon from "../public/whiteGithub.svg";
import WatIcon from "../public/whiteAt.svg";
import BgithubIcon from "../public/blueGithub.svg";
import BatIcon from "../public/blueAt.svg";
import {MdDesignServices, MdOutlineCode, MdRocketLaunch, MdAnalytics, MdLightbulb} from "react-icons/md";
import {IoExtensionPuzzleSharp} from "react-icons/io5";
import {HiPaintBrush} from "react-icons/hi2";
import {BsFillGearFill} from "react-icons/bs";

const Home = () => {
    const [navbarColor, setNavbarColor] = useState('bg-sky-900 dark:bg-[#194a4a]');
    const [textColor, setTextColor] = useState('text-white');
    const [githubImg, setGithubImg] = useState(WgithubIcon);
    const [atImg, setAtImg] = useState(WatIcon);
    const [opacity, setOpacity] = useState(100);

    useEffect(() => {
        const onScroll = () => {
            setOpacity((opacity - (window.scrollY / 5)) / 100)
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY < 2) {
                setNavbarColor('bg-sky-900 dark:bg-[#194a4a]');
                setTextColor('text-white')
                setGithubImg(WgithubIcon);
                setAtImg(WatIcon);
            }
            else if (window.scrollY > 2) {
                setNavbarColor('bg-gray-800 shadow-lg dark:bg-[#1a1a1a]');
                setTextColor('text-white dark:text-[#2176FF]')
                setGithubImg(BgithubIcon);
                setAtImg(BatIcon);
            }
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function handleClick(ref: any) {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <div className={`transition-all h-full flex flex-row items-center justify-between p-4 text-2xl sticky top-0 z-20 ${navbarColor} ${textColor}`}>
                <div className={'w-1/3 justify-center flex flex-row gap-4'}>
                    <h2 className={`cursor-pointer font-bold`} onClick={() => handleClick(workRef)}>Work</h2>
                    <h2 className={`cursor-pointer font-bold`} onClick={() => handleClick(aboutRef)}>About</h2>
                </div>
                <div className={'w-1/3 flex flex-row justify-center font-bold'}>Joshua Oguh</div>
                <div className={'w-1/3 h-full justify-center flex flex-row gap-4 font-bold'}>
                    <div className={'h-8 w-8 relative'}>
                        <a href={'mailto:joshuaoguh012@gmail.com'}>
                            <Image src={atImg} alt={'at sign'} layout={'fill'} objectFit={'contain'}/>
                        </a>
                    </div>
                    <div className={'h-8 w-8 relative cursor-pointer'}>
                        <a href={'https://github.com/Dismixed'} target="_blank" rel="noopener noreferrer">
                            <Image src={githubImg} alt={'github icon'} layout={'fill'} objectFit={'contain'}/>
                        </a>
                    </div>
                </div>
            </div>
            {true ? null : <section className="bg-[#e2e8ff] dark:bg-gray-900 px-12 h-screen">
                <div className="py-8 px-4 text-center lg:py-16 lg:px-12 flex flex-col h-full justify-center items-center">
                    <p className="mb-2 text-lg font-normal text-black dark:text-white lg:text-xl sm:px-16 xl:px-48">
                        My name is Joshua Oguh. I provide:
                    </p>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-loose text-gray-900 md:text-5xl lg:text-6xl dark:text-white px-32 text-center">
                        Innovative web solutions to grow your business.
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48
                    dark:text-gray-400">Transforming your online presence into a powerful business tool -
                        my mission is to create stunning, effective websites that drive growth and engagement.
                    </p>
                    <div
                        className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#"
                           className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Contact me
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>}
            <section className={'fixed h-screen flex gap-16 flex-col w-full relative bg-hero bg-cover bg-[#0c41f0]/75 bg-blend-multiply flex flex-row items-center justify-center'}>
                <h1 className={`z-10 text-6xl w-3/5 text-center font-bold animate__animated animate__fadeInUp`} style={{color: `rgba(255, 255, 255, ${opacity}`}}>Hi! I&apos;m Joshua Oguh. <br /> I provide innovative web solutions to grow your business.</h1>
                <h2 className={'text-white text-2xl z-10 animate__animated animate__fadeInUp'} onClick={handleClick} style={{color: `rgba(255, 255, 255, ${opacity}`}}>Scroll to see what I offer.</h2>
            </section>
            <section className="bg-white dark:bg-gray-900 px-12">
                <div className="px-4 sm:px-6 lg:px-8 mt-16">
                    <h2 className="text-6xl text-black dark:text-white font-semibold w-1/2">My goal is to build brands.</h2>
                    <div className="grid grid-cols-4 mt-16 gap-8">
                        <div className="col-span-1 border border-gray-800 rounded p-8">
                            <h2 className="text-4xl text-black dark:text-white font-semibold">Design</h2>
                            <p className="text-black dark:text-white mt-4 text-xl">I build websites that are fast, secure, and easy to manage.
                                I use the latest technologies to ensure your website is future-proof and scalable.
                            </p>
                            <div className="rounded-full bg-blue-300 w-fit p-4 mt-8">
                                <MdDesignServices className={'text-4xl'} />
                            </div>
                        </div>
                        <div className="col-span-1 border border-gray-800 rounded p-8">
                            <h2 className="text-4xl text-black dark:text-white font-semibold">Development</h2>
                            <p className="text-black dark:text-white mt-4 text-xl">I build websites that are fast, secure, and easy to manage.
                                I use the latest technologies to ensure your website is future-proof and scalable.
                            </p>
                            <div className="rounded-full bg-pink-300 w-fit p-4 mt-8">
                                <MdOutlineCode className={'text-4xl'} />
                            </div>
                        </div>
                        <div className="col-span-1 border border-gray-800 rounded p-8">
                            <h2 className="text-4xl text-black dark:text-white font-semibold">Hosting</h2>
                            <p className="text-black dark:text-white mt-4 text-xl">I build websites that are fast, secure, and easy to manage.
                                I use the latest technologies to ensure your website is future-proof and scalable.
                            </p>
                            <div className="rounded-full bg-orange-300 w-fit p-4 mt-8">
                                <MdRocketLaunch className={'text-4xl'} />
                            </div>
                        </div>
                        <div className="col-span-1 border border-gray-800 rounded p-8">
                            <h2 className="text-4xl text-black dark:text-white font-semibold">Analytics</h2>
                            <p className="text-black dark:text-white mt-4 text-xl">I build websites that are fast, secure, and easy to manage.
                                I use the latest technologies to ensure your website is future-proof and scalable.
                            </p>
                            <div className="rounded-full bg-green-300 w-fit p-4 mt-8">
                                <MdAnalytics className={'text-4xl'} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 px-12">
                <div className="py-8 px-4 lg:py-16 lg:px-12 px-12">
                    <h3 className="text-4xl font-bold text-black dark:text-white">The problem</h3>
                    <p className="text-black dark:text-white mt-4 text-2xl w-2/3 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Maecenas eros felis, pellentesque eget tincidunt quis, iaculis at elit.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-8 px-4 lg:px-12 px-12">
                    <div className="col-span-1 flex flex-col">
                        <div className="flex flex-row items-center">
                            <IoExtensionPuzzleSharp className={'text-lg text-orange-300'} />
                            <p className="text-black dark:text-white text-lg ml-4">Your website has slow load times</p>
                        </div>
                        <div className="flex flex-row items-center mt-8">
                            <IoExtensionPuzzleSharp className={'text-lg text-yellow-300'} />
                            <p className="text-black dark:text-white text-lg ml-4">Your website's design is outdated</p>
                        </div>
                        <div className="flex flex-row items-center mt-8">
                            <IoExtensionPuzzleSharp className={'text-lg text-blue-300'} />
                            <p className="text-black dark:text-white text-lg ml-4">Your website has poor mobile optimization </p>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col">
                        <div className="flex flex-row items-center">
                            <IoExtensionPuzzleSharp className={'text-lg text-green-300'} />
                            <p className="text-black dark:text-white text-lg ml-4">Bad mobile design</p>
                        </div>
                        <div className="flex flex-row items-center mt-8">
                            <IoExtensionPuzzleSharp className={'text-lg text-pink-300'} />
                            <p className="text-black dark:text-white text-lg ml-4">Lack of search engine optimization</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 px-12">
                <div className="py-8 px-4 lg:py-16 lg:px-12 px-12 grid grid-cols-7">
                    <div className="col-span-4">
                        <div className="flex flex-col">
                            <div className="bg-gradient-to-b from-blue-600 to-indigo-800 rounded-lg h-36 w-3/4 mt-8 p-8">
                                <div className="flex flex-row items-center">
                                    <MdLightbulb className={'text-3xl text-white'} />
                                    <h4 className="text-white ml-4 text-3xl">Content strategy analysis</h4>
                                </div>
                            </div>
                            <div className="bg-gradient-to-b from-indigo-800 to-violet-700 rounded-lg h-36 w-3/4 ml-24 mt-12 p-8">
                                <div className="flex flex-row items-center">
                                    <HiPaintBrush className={'text-3xl text-white'} />
                                    <h4 className="text-white ml-4 text-3xl">Website redesign</h4>
                                </div>
                            </div>
                            <div className="bg-gradient-to-b from-violet-700 to-purple-900 rounded-lg h-36 w-3/4 mt-12 p-8">
                                <div className="flex flex-row items-center">
                                    <BsFillGearFill className={'text-3xl text-white'} />
                                    <h4 className="text-white ml-4 text-3xl">Performance Optimization</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3">
                        <h3 className="text-4xl font-bold text-black dark:text-white">The solution</h3>
                        <p className="text-black dark:text-white mt-4 text-2xl dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Maecenas eros felis, pellentesque eget tincidunt quis, iaculis at elit.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 px-12">
                <div className="py-8 px-4 lg:py-16 lg:px-12 px-12 text-center">
                    <h3 className="text-6xl text-black dark:text-white font-semibold">My recent works</h3>
                </div>
                <div className="grid grid-cols-5 gap-8 px-4 lg:px-12 px-12">
                    <div className="col-span-2">
                        <div className="flex flex-col">
                            <h4 className="text-black dark:text-white text-3xl font-medium tracking-loose">OrbitXLM</h4>
                            <p className="text-black dark:text-white text-xl mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Nulla ipsum ipsum, fringilla id pharetra a, semper eu nibh. Sed ornare erat
                                convallis, euismod est vel, laoreet sem. Cras placerat lacus rutrum egestas bibendum.
                                Suspendisse potenti. Vestibulum sit amet placerat velit. Maecenas non consectetur purus.
                                Aliquam sed massa ullamcorper urna faucibus auctor id venenatis mauris.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-3 bg-gray-500 rounded-xl">

                    </div>
                </div>
                <div className="grid grid-cols-5 gap-8 px-4 lg:px-12 px-12 mt-24">
                    <div className="col-span-3 bg-gray-500 rounded-xl">

                    </div>
                    <div className="col-span-2">
                        <div className="flex flex-col">
                            <h4 className="text-black dark:text-white text-3xl font-medium tracking-loose">OrbitXLM</h4>
                            <p className="text-black dark:text-white text-xl mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Nulla ipsum ipsum, fringilla id pharetra a, semper eu nibh. Sed ornare erat
                                convallis, euismod est vel, laoreet sem. Cras placerat lacus rutrum egestas bibendum.
                                Suspendisse potenti. Vestibulum sit amet placerat velit. Maecenas non consectetur purus.
                                Aliquam sed massa ullamcorper urna faucibus auctor id venenatis mauris.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 px-12">
                <div className="py-8 px-4 lg:py-16 lg:px-12 px-12 text-center">
                    <h3 className="text-6xl text-black dark:text-white font-semibold">My Process</h3>
                    <p className="text-black dark:text-white mt-4 text-lg px-64 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Maecenas eros felis, pellentesque eget tincidunt quis, iaculis at elit.
                    </p>
                    <div className="border-2 border-black dark:border-white mt-16">
                        <div className="flex flex-row p-12 items-center gap-12 grid grid-cols-5">
                            <div className="flex flex-col items-center justify-center col-span-1">
                                <h4 className="text-black dark:text-white font-semibold text-5xl">01</h4>
                                <h4 className="text-black dark:text-white font-medium text-5xl">Strategize</h4>
                            </div>
                            <p className="text-black dark:text-white text-xl text-start col-span-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat pellentesque
                                ornare. Aenean ornare odio eu arcu hendrerit convallis.
                                Suspendisse dignissim volutpat nisl, eu vulputate massa eleifend in.
                                Nunc ut magna et neque mattis fringilla eu non nisl. </p>
                        </div>
                        <div className="border border-black dark:border-white w-11/12 mx-auto"></div>
                        <div className="flex flex-row p-12 items-center gap-12 grid grid-cols-5">
                            <div className="flex flex-col items-center justify-center col-span-1">
                                <h4 className="text-black dark:text-white font-semibold text-5xl">02</h4>
                                <h4 className="text-black dark:text-white font-medium text-5xl">Design</h4>
                            </div>
                            <p className="text-black dark:text-white text-xl text-start col-span-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat pellentesque
                                ornare. Aenean ornare odio eu arcu hendrerit convallis.
                                Suspendisse dignissim volutpat nisl, eu vulputate massa eleifend in.
                                Nunc ut magna et neque mattis fringilla eu non nisl. </p>
                        </div>
                        <div className="border border-black dark:border-white w-11/12 mx-auto"></div>
                        <div className="flex flex-row p-12 items-center gap-12 grid grid-cols-5">
                            <div className="flex flex-col items-center justify-center col-span-1">
                                <h4 className="text-black dark:text-white font-semibold text-5xl">03</h4>
                                <h4 className="text-black dark:text-white font-medium text-5xl">Develop</h4>
                            </div>
                            <p className="text-black dark:text-white text-xl text-start col-span-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat pellentesque
                                ornare. Aenean ornare odio eu arcu hendrerit convallis.
                                Suspendisse dignissim volutpat nisl, eu vulputate massa eleifend in.
                                Nunc ut magna et neque mattis fringilla eu non nisl. </p>
                        </div>
                        <div className="border border-black dark:border-white w-11/12 mx-auto"></div>
                        <div className="flex flex-row p-12 items-center gap-12 grid grid-cols-5">
                            <div className="flex flex-col items-center justify-center col-span-1">
                                <h4 className="text-black dark:text-white font-semibold text-5xl">04</h4>
                                <h4 className="text-black dark:text-white font-medium text-5xl">Launch</h4>
                            </div>
                            <p className="text-black dark:text-white text-xl text-start col-span-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat pellentesque
                                ornare. Aenean ornare odio eu arcu hendrerit convallis.
                                Suspendisse dignissim volutpat nisl, eu vulputate massa eleifend in.
                                Nunc ut magna et neque mattis fringilla eu non nisl. </p>
                        </div>
                        <div className="border border-black dark:border-white w-11/12 mx-auto"></div>
                        <div className="flex flex-row p-12 items-center gap-12 grid grid-cols-5">
                            <div className="flex flex-col items-center justify-center col-span-1">
                                <h4 className="text-black dark:text-white font-semibold text-5xl">05</h4>
                                <h4 className="text-black dark:text-white font-medium text-5xl">Maintain</h4>
                            </div>
                            <p className="text-black dark:text-white text-xl text-start col-span-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat pellentesque
                                ornare. Aenean ornare odio eu arcu hendrerit convallis.
                                Suspendisse dignissim volutpat nisl, eu vulputate massa eleifend in.
                                Nunc ut magna et neque mattis fringilla eu non nisl. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900 px-12">
                <div className="py-8 px-4 lg:py-16 lg:px-12 px-12 text-center">
                    <h3 className="text-5xl text-black dark:text-white font-semibold">Have a project in mind? Let's chat.</h3>
                    <form action="#" className="space-y-8 px-48 mt-12">
                        <div>
                            <label htmlFor="email"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                email</label>
                            <input type="email" id="email"
                                   className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject"
                                   className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                   placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your
                                message</label>
                            <textarea id="message" rows={6}
                                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                      placeholder="Write a message..."></textarea>
                        </div>
                        <button type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-black dark:text-white rounded-lg bg-blue-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-blue-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send
                            message
                        </button>
                    </form>
                </div>
            </section>
        </div>



)
}

export default Home;
