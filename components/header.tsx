import Link from "next/link";

const Header = () => {
    return (
        <header className={`font-mont transition-all bg-blue-900 justify-between 
        flex flex-row items-center md:p-6 p-4 top-0`}>
            <Link href={'/'} className="text-2xl text-white font-bold hover:text-gray-300 cursor-pointer">Joshua Oguh</Link>
            <div className="flex flex-row gap-4 text-2xl">
                <Link href="contact" className={`text-white hover:text-gray-300 font-light transition-all`}>Contact</Link>
                <Link href="portfolio" className={`text-white hover:text-gray-300 font-light transition-all`}>Portfolio</Link>
            </div>
        </header>
    )
}

export default Header
