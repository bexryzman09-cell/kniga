import { Link } from 'react-router-dom';


export default function NotFound() {
    return (
        <>
            <section>
                <div>
                    <div className='flex items-center  flex-col'>
                        <h1 className='p-10 font-[Cormorant] text-[64px] font-bold leading-[89.6px] text-left text-[rgb(23,23,24)]'>Что-то пошло не так</h1>
                        <img className='p-10' width={666} src="/error.svg" alt="error" />
                        <Link className='flex mx-43.25 m-10 w-full max-w-73.5 justify-center h-12 p-3.25 text-white bg-[#db5300] border-0 rounded-[14px]' to="/">Вернуться на главную страницу</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
