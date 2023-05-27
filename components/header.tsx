import Link from "next/link";

const Header = () => {
    return (
        <header className={`font-mont transition-all bg-blue-900 justify-between 
        flex flex-row items-center md:p-6 p-4 top-0`}>
            <Link href={'/'}>
                <span className="text-2xl text-white font-bold hover:text-gray-300 cursor-pointer">
                    Joshua Oguh
                </span>
            </Link>
            <div className="flex flex-row gap-4 text-2xl">
                <Link href="contact">
                    <span className={`text-white hover:text-gray-300 font-light cursor-pointer transition-all`}>
                        Contact
                    </span>
                </Link>
                <Link href="portfolio">
                    <span className={`text-white hover:text-gray-300 font-light cursor-pointer transition-all`}>
                        Portfolio
                    </span>
                </Link>
            </div>
        </header>
    )
}

export default Header
