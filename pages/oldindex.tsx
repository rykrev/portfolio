import type { NextPage } from 'next'
import 'animate.css';
import Image from "next/legacy/image"
import serverImg from '../public/server-svgrepo-com.svg'
import developImg from '../public/api-svgrepo-com.svg'
import designImg from '../public/web-design-svgrepo-com.svg'
import screenshot1 from '../public/zcancelingscreenshot.png'
import screenshot2 from '../public/polarascreenshotimg.png'

import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import SkillsComp from "../components/skillscomp";
import WatIcon from '../public/whiteAt.svg'
import BatIcon from '../public/blueAt.svg'
import WgithubIcon from '../public/whiteGithub.svg'
import BgithubIcon from '../public/blueGithub.svg'
import Head from "next/head";

import Flickity from 'react-flickity-component'

//TODO dark mode
const Home: NextPage = () => {
    const [opacity, setOpacity] = useState(100)
    const [navbarColor, setNavbarColor] = useState('bg-[#0c41f0]');
    const [textColor, setTextColor] = useState('text-white');
    const [githubImg, setGithubImg] = useState(WgithubIcon);
    const [atImg, setAtImg] = useState(WatIcon);
    const workRef = useRef(null);
    const aboutRef = useRef(null);
    const gliderRef = useRef(null);

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true
    };


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY < 2) {
                setNavbarColor('bg-[#0c41f0] dark:bg-[#194a4a]');
                setTextColor('text-white')
                setGithubImg(WgithubIcon);
                setAtImg(WatIcon);
            }
            else if (window.scrollY > 2) {
                setNavbarColor('bg-white shadow-lg dark:bg-[#1a1a1a]');
                setTextColor('text-[#0c41f0] dark:text-[#194a4a]')
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

    useEffect(() => {
        const onScroll = () => {
            setOpacity((opacity - (window.scrollY / 5)) / 100)
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <title>Joshua Oguh</title>
            </Head>
            <div className={`transition-all h-full flex flex-row items-center justify-between p-4 text-2xl sticky top-0 z-20 font-roboto ${navbarColor} ${textColor}`}>
                <div className={'w-1/3 justify-center flex flex-row gap-4'}>
                    <h2 className={`cursor-pointer font-bold`} onClick={() => handleClick(workRef)}>work</h2>
                    <h2 className={`cursor-pointer font-bold`} onClick={() => handleClick(aboutRef)}>about</h2>
                </div>
                <div className={'w-1/3 flex flex-row justify-center font-bold'}>joshua oguh</div>
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
            <div className={'h-full w-full overflow-auto'}>
                <section className={'fixed h-screen flex gap-16 flex-col w-full relative bg-hero bg-cover bg-[#0c41f0]/75 bg-blend-multiply flex flex-row items-center justify-center'}>
                    <h1 className={`font-roboto z-10 text-6xl w-3/5 text-center font-bold animate__animated animate__fadeInUp`} style={{color: `rgba(255, 255, 255, ${opacity}`}}>Hi! I&apos;m Joshua Oguh. <br /> I&apos;m a web developer here to service all of your website needs.</h1>
                    <h2 className={'text-white text-2xl z-10 animate__animated animate__fadeInUp'} onClick={handleClick} style={{color: `rgba(255, 255, 255, ${opacity}`}}>Scroll to see what I offer.</h2>
                </section>
                <section className={'pt-4 pb-4 dark:bg-[#202024] dark:text-white'}>
                    <h3 ref={aboutRef} className={'text-4xl text-center pt-4'}>A one stop shop for all your website needs.</h3>
                </section>
                <SkillsComp></SkillsComp>
                <section className={'w-full flex bg-[#FEFBF9] dark:bg-[#1a1a1c] flex-col dark:text-white p-8'}>
                    <h3 ref={workRef}  className={'text-4xl text-center mb-8'}>Project based experience.</h3>
                    <div className={'w-full flex flex-col'}>
                        <div className={'w-full flex flex-row'}>
                            <Link href={'https://zcanceling.com/'}>
                                <a className={'w-3/5 z-10 h-[28rem] shrink-0 relative shadow-xl mb-8'} target={'_blank'}>
                                    <Image src={screenshot1} layout={'fill'} objectFit={'contain'}></Image>
                                </a>
                            </Link>
                            <div className={'flex flex-col justify-center ml-8'}>
                                <h3 className={'text-2xl mb-2'}>ZCanceling Internet Radio</h3>
                                <p>Internet Radio Station developed using Typescript, NextJS, React, TailwindCSS, and Express.
                                    I made the design and then implemented the design using the above technologies. The website has
                                    a mobile-first design and has accessibility as the priority.</p>
                                <Link href={'https://zcanceling.com/'}>
                                    <a target={'_blank'}>
                                        <button className={'mt-4 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none'}>View Site</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full flex flex-col'} ref={workRef}>
                        <div className={'w-full flex flex-row-reverse'}>
                            <Link href={'https://polara.vercel.app/'}>
                                <a className={'w-3/5 z-10 h-[28rem] shrink-0 relative shadow-xl mb-8'} target={'_blank'}>
                                    <Image src={screenshot2} layout={'fill'} objectFit={'contain'}></Image>
                                </a>
                            </Link>
                            <div className={'flex flex-col justify-center mr-8'}>
                                <h3 className={'text-2xl mb-2'}>Polara</h3>
                                <p>A Web3 website created which is a CRUD app, using users&apos; addresses as their
                                    login, with the ability to create and edit elements. Created using the MERN stack,
                                    it interacts with the CoinGecko, DexScreener, Messari and PolygonScan/EtherScan
                                    APIs to grab current prices/balances and the 1INCH protocol to handle trades. </p>
                                <Link href={'https://polara.vercel.app/'}>
                                    <a target={'_blank'}>
                                        <button className={'mt-4 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none'}>View Site</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
