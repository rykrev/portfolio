const HeaderComponent = () => {
    return (
        <div className={'flex flex-row h-full w-full items-center justify-between p-4 text-2xl font-nunito font-bold bg-[#0c41f0] text-white'}>
            <div className={'w-1/3 justify-center flex flex-row gap-4'}>
                <h2>work</h2>
                <h2>about</h2>
                <h2>contact</h2>
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