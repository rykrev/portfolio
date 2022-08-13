import Link from "next/link";
const HeaderComponent = () => {
    return (
        <div className={'flex flex-row items-center justify-between p-4 text-2xl font-nunito font-bold bg-[#0c41f0] text-white'}>
            <div className={'w-1/3 justify-center flex flex-row gap-4'}>
                <Link href={'/'}>
                    <h2 className={'cursor-pointer'}>work</h2>
                </Link>
                <Link href={'/about'}>
                    <h2 className={'cursor-pointer'}>about</h2>
                </Link>
                <Link href={'/contact'}>
                    <h2 className={'cursor-pointer'}>contact</h2>
                </Link>
            </div>
            <div className={'w-1/3 flex flex-row justify-center'}>joshua oguh</div>
            <div className={'w-1/3 justify-center flex flex-row gap-4'}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    )
}

export default HeaderComponent