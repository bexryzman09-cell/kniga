import { Link } from 'react-router-dom';

export default function Types() {
    return (
        <>
            <section>
                <div className='max-w-7xl w-full m-auto  px-5'>
                    <div className='flex gap-5 justify-center'>
                    <Link className='flex gap-6 text-center rounded-[14px] shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-1.5 active:-translate-y-0.5 max-w-100 w-full  flex-col px-25 pt-20 pb-10 text-[24px] text-[rgb(23,23,24)] mt-11 uppercase leading-[33.6px] ' to="/library"><img width={250} src="/new_books.svg" alt="new-books" />Новый книги</Link>
                    <Link className='flex gap-6 text-center rounded-[14px] shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-1.5 active:-translate-y-0.5 max-w-100 w-full  flex-col px-25 pt-20 pb-10 text-[24px] text-[rgb(23,23,24)] mt-11 uppercase leading-[33.6px] ' to="/library"><img src="/exchange_books.svg" alt="new-books" />Обмен книгами</Link>
                    <Link className='flex gap-6 text-center rounded-[14px] shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-1.5 active:-translate-y-0.5 max-w-100 w-full  flex-col px-25 pt-20 pb-10 text-[24px] text-[rgb(23,23,24)] mt-11 uppercase leading-[33.6px] ' to="/library"><img src="/gift_books.svg" alt="new-books" />Подарочный книги</Link>

                </div>
                </div>
            </section>
        </>
    )
}
