import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <footer className="flex w-full  p-4 items-center justify-center   bg-[rgb(246,246,250)] shadow-[0_5px_20px_0_rgba(214,219,225,0.4)]">
                <div className=''>
                    <div className='  flex  w-full space-between gap-7 mt-10 mb-12  '>
                        <div className='mr-7'>
                            <a href="">   <img width={110} src="/logo.jpg" alt="Logo" /></a>
                            <p className="mt-3 w-82">books.com — это платформа, созданная для  продажи, дарения или обмена книгами.</p>
                            <a href="" target="_blank"><img width={200} height={100} src="/gogleplay.png" alt="" /></a>
                        </div>
                        <div className='flex gap-36 mr-10' >
                            <div className=' flex gap-2.5   flex-col'>
                                <h1 className="text-3xl font-extrabold">Разделы</h1>
                                <Link className='hover:text-orange-500 duration-400' to="/about">О нас</Link>
                                <Link className='hover:text-orange-500 duration-400' to="/about">Новый книги</Link>
                                <Link className='hover:text-orange-500 duration-400' to="/about">Обмен книгами</Link>
                                <Link className='hover:text-orange-500 duration-400' to="/about">подарочный книги</Link>
                                <Link className='hover:text-orange-500 duration-400' to="/about">Вопросы и ответы</Link>
                            </div>
                            <div className=' flex gap-2.5   flex-col'>
                                <h1 className="text-3xl font-extrabold">Жанры</h1>
                                <Link className='hover:text-orange-500 duration-400' to="/about">Научная литература</Link>
                                <Link className='hover:text-orange-500 duration-400' to="/about">Иностраный язык</Link>
                                <Link className='hover:text-orange-500 duration-400' to="/about">Детективы</Link>
                                <Link className='hover:text-orange-500 duration-400' to="/about">Детская литература</Link>
                                <Link className='hover:text-orange-500 duration-400' to="/about">Историческа</Link>
                                <Link className='hover:text-orange-500 duration-400' to="/about">Манга</Link>
                                <Link className='hover:text-orange-500 duration-400' to="/about">Комикс</Link>
                            </div>
                        </div>
                        <div className=' flex gap-2.5   flex-col'>
                            <h1 className="text-3xl font-extrabold">Связь</h1>
                            <a className='flex  gap-2 hover:text-orange-500 duration-400' href="" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><title>phone-telephone</title><path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M16.996 7.686a2 2 0 0 1 1.749 1.03l2.446 4.406a2 2 0 0 1 .04 1.865l-2.356 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.713-2.357a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 40.8 31.49v5.073c0 2.584-2.4 4.45-4.848 3.624c-5.028-1.697-12.833-4.927-17.78-9.874c-4.946-4.947-8.177-12.751-9.873-17.78c-.826-2.447 1.04-4.847 3.624-4.847z" /></svg> +998 (91) 572-12-13</a>
                            <a className='flex  gap-2 hover:text-orange-500 duration-400' href="" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><title>baseline-telegram</title><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19c-.14.75-.42 1-.68 1.03c-.58.05-1.02-.38-1.58-.75c-.88-.58-1.38-.94-2.23-1.5c-.99-.65-.35-1.01.22-1.59c.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02c-.09.02-1.49.95-4.22 2.79c-.4.27-.76.41-1.08.4c-.36-.01-1.04-.2-1.55-.37c-.63-.2-1.12-.31-1.08-.66c.02-.18.27-.36.74-.55c2.92-1.27 4.86-2.11 5.83-2.51c2.78-1.16 3.35-1.36 3.73-1.36c.08 0 .27.02.39.12c.1.08.13.19.14.27c-.01.06.01.24 0 .38" /></svg> Telegram</a>
                            <a className=' flex gap-2 hover:text-orange-500 duration-400' href="" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48"><title>btc-map</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5A15.943 15.943 0 0 0 8.068 20.432c0 6.225 3.933 11.91 7.806 16.013a52 52 0 0 0 7.736 6.785l.39.27l.39-.27c2.798-2 5.389-4.273 7.736-6.785C36 32.3 39.932 26.627 39.932 20.432A15.94 15.94 0 0 0 24 4.5" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.019 20.285a1.834 1.834 0 1 1-.95 3.543l-2.923-.783l1.9-7.087l2.922.784a1.834 1.834 0 1 1-.95 3.543Zm0 0l-2.923-.783m-.95 3.543l-.886-.238m2.785-6.849l-.886-.237m-.364 8.447l.237-.886m1.534 1.361l.238-.886m.126-7.561l.238-.886m1.534 1.36l.238-.885" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.68 28.672a8.965 8.965 0 1 0 4.64-17.32a8.965 8.965 0 0 0-4.64 17.32" /></svg>Улица Чопон Ота 6б город   Ташкент</a>
                        </div>
                    </div>
                    <span className=''></span>
                    <div className=' flex py-5 justify-between border-t border-t-[rgb(238,238,238)]'>
                        <p>Copyright © 2024 Books.com</p>
                        <p>Created by <span className='text-[rgb(237,85,59)] font-bold'>BrainDevelopment</span></p>
                    </div>
                </div>
            </footer>
        </>
    )
}
