import Link from "next/link";
import {useEffect, useState} from "react";

//TOOD change to ternary operator
const HeaderComponent = () => {
    const [workBold, setWorkBold] = useState('font-bold');
    const [aboutBold, setAboutBold] = useState('');
    const [contactBold, setContactBold] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [navbarColor, setNavbarColor] = useState('bg-[#0c41f0]');
    const [textColor, setTextColor] = useState('text-white');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY < 2) {
                setScrolled(false);
                setNavbarColor('bg-[#0c41f0]');
                setTextColor('text-white')
            }
            else if (window.scrollY > 2) {
                setScrolled(true);
                setNavbarColor('bg-white shadow-lg');
                setTextColor('text-[#0c41f0]')
            }
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const url = window.location.href.split('/')
        const param = url.indexOf('localhost:3000') + 1
        if (url[param] === 'about') {
            setAboutBold('font-bold')
            setContactBold('')
            setWorkBold('')
        } else if (url[param] === '') {
            setWorkBold('font-bold')
            setAboutBold('')
            setContactBold('')
        } else if (url[param] === 'contact') {
            setContactBold('font-bold')
            setAboutBold('')
            setWorkBold('')
        }
    })

    return (
        <div className={`transition-all flex flex-row items-center justify-between p-4 text-2xl sticky top-0 z-20 font-roboto ${navbarColor} ${textColor}`}>
            <div className={'w-1/3 justify-center flex flex-row gap-4'}>
                <Link href={'/'}>
                    <h2 className={`cursor-pointer ${workBold}`}>work</h2>
                </Link>
                <Link href={'/about'}>
                    <h2 className={`cursor-pointer ${aboutBold}`}>about</h2>
                </Link>
                <Link href={'/contact'}>
                    <h2 className={`cursor-pointer ${contactBold}`}>contact</h2>
                </Link>
            </div>
            <div className={'w-1/3 flex flex-row justify-center font-bold'}>joshua oguh</div>
            <div className={'w-1/3 justify-center flex flex-row gap-4 font-bold'}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    )
}

export default HeaderComponent