import type { NextPage } from 'next'
import 'animate.css';
import Image from 'next/image'

import reactIcon from '../public/react-icon.svg'
import mongoIcon from '../public/mongodb-svgrepo-com.svg'
import tailwindIcon from '../public/Tailwind_CSS_Logo.svg'
import typescriptIcon from '../public/Typescript_logo_2020.svg'
import expressIcon from '../public/expressjs_logo_icon_169185.svg'
import nextjsIcon from '../public/Nextjs-logo.svg'
import pythonIcon from '../public/python_icon.svg'
import {useEffect, useState} from "react";

const Home: NextPage = () => {
    const [opacity, setOpacity] = useState(100)
    useEffect(() => {
        const onScroll = () => {
            setOpacity((opacity - (window.scrollY / 5)) / 100)
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return (
      <div className={'h-full w-full overflow-auto'}>
          <div className={'fixed h-[32rem] w-full relative bg-hero bg-cover bg-[#0c41f0]/75 bg-blend-multiply flex flex-row items-center justify-center'}>
              <h1 className={`font-roboto opacity-75 z-10 text-6xl w-3/5 text-center font-bold animate__animated animate__fadeInUp`} style={{color: `rgba(255, 255, 255, ${opacity}`}}>Hi! I'm Joshua Oguh. <br /> I'm a web developer based in Pittsburgh.</h1>
          </div>
          <div>
              <div className={'text-3xl text-center pt-4'}>Skills</div>
              <div className={'h-52 w-full flex flex-row items-center justify-center gap-6'}>
                  <div className={'w-36 h-36 shadow-xl rounded-lg border border-gray-200 items-center pt-2 pb-6 flex flex-col'}>
                      <h3 className={'text-xl'}>React</h3>
                      <div className={'h-full w-full flex flex-col items-center relative mt-4'}>
                          <Image src={reactIcon} layout={'fill'}></Image>
                      </div>
                  </div>
                  <div className={'w-36 h-36 shadow-xl rounded-lg border border-gray-200 items-center py-2 flex flex-col'}>
                      <h3 className={'text-xl'}>TailwindCSS</h3>
                      <div className={'h-full w-full flex flex-col items-center relative mt-4'}>
                          <Image src={tailwindIcon} layout={'fill'}></Image>
                      </div>                  </div>
                  <div className={'w-36 h-36 shadow-xl rounded-lg border border-gray-200 items-center py-2 flex flex-col'}>
                      <h3 className={'text-xl'}>Typescript</h3>
                      <div className={'h-full w-full flex flex-col items-center relative mt-4'}>
                          <Image src={typescriptIcon} layout={'fill'}></Image>
                      </div>                  </div>
                  <div className={'w-36 h-36 shadow-xl rounded-lg border border-gray-200 items-center py-2 flex flex-col'}>
                      <h3 className={'text-xl'}>Next.js</h3>
                      <div className={'h-full w-full flex flex-col items-center relative mt-4'}>
                          <Image src={nextjsIcon} layout={'fill'}></Image>
                      </div>                  </div>
                  <div className={'w-36 h-36 shadow-xl rounded-lg border border-gray-200 items-center py-2 flex flex-col'}>
                      <h3 className={'text-xl'}>Express</h3>
                      <div className={'h-full w-full flex flex-col items-center relative mt-4'}>
                          <Image src={expressIcon} layout={'fill'}></Image>
                      </div>                  </div>
                  <div className={'w-36 h-36 shadow-xl rounded-lg border border-gray-200 items-center py-2 flex flex-col'}>
                      <h3 className={'text-xl'}>MongoDB</h3>
                      <div className={'h-full w-full flex flex-col items-center relative mt-4'}>
                          <Image src={mongoIcon} layout={'fill'}></Image>
                      </div>
                  </div>
                  <div className={'w-36 h-36 shadow-xl rounded-lg border border-gray-200 items-center py-2 flex flex-col'}>
                      <h3 className={'text-xl'}>Python</h3>
                        <div className={'h-full w-full flex flex-col items-center relative mt-4'}>
                            <Image src={pythonIcon} layout={'fill'}></Image>
                        </div>
                  </div>
              </div>
          </div>
          <div className={'bg-gray-100'}>
              <div className={'text-3xl text-center pt-4'}>Projects</div>
              <div className={'h-96 w-full p-12'}>
                  <div className={'flex flex-col p-4 bg-white rounded-xl h-full w-full shadow-xl'}>
                      <h2 className={'text-3xl'}>Polara</h2>
                      <div>

                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Home
