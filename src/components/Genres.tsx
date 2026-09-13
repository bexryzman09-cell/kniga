import { Link } from 'react-router-dom';

export default function Genres() {
    return (
        <>
            <section className=" my-10 ">
                <div className='max-w-7xl w-full m-auto  px-5'>

                    <div className='max-w-7xl w-full m-auto  px-5'>
                        <h1 className="flex gap-2 ml-22 mb-5  items-center  text-[34px] font-bold leading-[47.6px] pl-4 hover:text-orange-500 duration-400">Жанры<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><title>geometric-shapes-01</title><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><path d="M14.617 4.767c1.01-1.601 1.516-2.401 2.178-2.643a2.06 2.06 0 0 1 1.41 0c.662.242 1.168 1.042 2.178 2.643c1.137 1.801 1.706 2.702 1.606 3.445c-.069.51-.326.976-.72 1.306C20.695 10 19.63 10 17.5 10s-3.195 0-3.77-.482a2.06 2.06 0 0 1-.719-1.306c-.1-.743.469-1.644 1.606-3.445ZM2 6c0-1.667 0-2.5.424-3.084q.207-.285.492-.492C3.5 2 4.333 2 6 2s2.5 0 3.084.424q.285.207.492.492C10 3.5 10 4.333 10 6s0 2.5-.424 3.084a2.2 2.2 0 0 1-.492.492C8.5 10 7.667 10 6 10s-2.5 0-3.084-.424a2.2 2.2 0 0 1-.492-.492C2 8.5 2 7.667 2 6Z" /><circle cx="17.5" cy="18" r="4" /><path stroke-linecap="round" d="m9.5 14.5l-7 7m0-7l7 7" /></g></svg></h1>

                        <div className='flex flex-wrap gap-5 justify-center'>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">
                                <span>IT</span>
                                <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <title>alt-arrow-right-linear</title>
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                                </svg>
                            </Link>

                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Боевеки <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Ранобэ <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Манга <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Биография <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Детектив <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Драма <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Классика <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Ужасы <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Комедия <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Мистика <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Романтика <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Ранобэ <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Сверхъестественное <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Историческая <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Исекай <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Классика <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                            <Link className="flex  items-center  justify-between pl-7.5 p-4   text-[rgb(23,23,24)] max-w-82.5 w-full rounded-2xl shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 hover:text-orange-500 " to="/library">Приключения <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <title>alt-arrow-right-linear</title>
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7" />
                            </svg></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
