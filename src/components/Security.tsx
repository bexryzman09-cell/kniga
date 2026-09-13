

export default function Security() {
    return (
        <>
            <section>
                <div className='flex justify-center items-center'>
                    <div className='flex w-full  justify-center pt-27.5 pb-25'>
                        <img className='rounded-bl-2xl  rounded-l-2xl' width={610} src="registerimage.png" alt="" />
                        <div className='pt-15 p-30 rounded-b-2xl rounded-tr-2xl  pb-38.5 shadow-[0_5px_20px_0_rgba(214,219,225,0.4)]'>

                            <div className='flex flex-col'>
                                <h1 className=' mb-3.25 text-center text-[#171718] text-[34px]  font-bold '>Безопасность</h1>
                                <p className='mb-7.5 text-[#525458] text-center   font-medium '>Установите надежный пароль</p>
                            </div>
                            <form className='flex flex-col max-w-sm gap-2.5'>

                                <label className='flex flex-col gap-2'    >
                                    Пароль:
                                    <div className="flex min-w-85 p-2 bg-white items-center rounded-[14px] border border-[#d6dbe1]">
                                        <input className='w-full       outline-none mb-1.75' placeholder='Password ' required type="password" />
                                        <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>baseline-remove-red-eye</title><path fill="currentColor" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3" /></svg>
                                    </div>
                                </label>

                                <button className='w-full max-w-85  p-3.25 rounded-[14px] bg-[#db5300] text-white   font-semibold '>Продольжить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
