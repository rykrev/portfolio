import Image from "next/image";
import reactIcon from "../public/React-icon.svg";
import tailwindIcon from "../public/Tailwind_CSS_Logo.svg";
import typescriptIcon from "../public/Typescript_logo_2020.svg";
import nextjsIcon from "../public/next-js-seeklogo.com.svg";
import expressIcon from "../public/expressjs_logo_icon_169185.svg";
import mongoIcon from "../public/mongodb-svgrepo-com.svg";
import pythonIcon from "../public/python_icon.svg";

const SkillsComp = () => {
    return (
        <div className={'dark:bg-[#202024] dark:text-white pt-16'}>
            <div className={'text-4xl text-center'}>Knowledge of the best web development technologies.</div>
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
    )
}

export default SkillsComp;