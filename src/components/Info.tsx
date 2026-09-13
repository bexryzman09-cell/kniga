import { Link } from 'react-router-dom';
export default function Info() {
    return (
        <>
            <section >
               <div className='max-w-7xl w-full m-auto  px-5'>
                 <div className='flex gap-5 items-center bg-[rgb(246,246,250)] max-w-300 w-full mx-12.5 pt-10 mb-10 p-10'>
                    <div className='mr-20px '>
                        <div className='flex gap-5 mb-2.5 items-center '>
                            <a href=""> <img width={100} src="/logo.jpg" alt="Logo" /></a>
                            <h1 className='text-[34px] font-bold leading-[47.6px]'>О Books.com</h1>
                        </div>
                        <div>
                            <p className='max-w-130  text-base font-medium leading-[22.4px] mt-5'>Kitabu.uz — это платформа, созданная для продажи, дарения или обмена книгами.</p> <br />
                            <p className='max-w-130 text-base font-medium leading-[22.4px]   mt-5'>Здесь пользователи могут легко обменивать или продавать свои книги, помогая продлить жизнь книгам и привлечь к ним новых читателей.</p>
                            <Link className='flex justify-center  mt-10 w-50 h-12 py-3.25 px-0 rounded-[14px]  font-medium leading-[22.4px] text-white bg-[rgb(219,83,0)]' to="/about" >В детялях</Link>
                        </div>
                    </div>
                    <img className='' src="/books.png" alt="books" />
                </div>
               </div>
            </section>
        </>
    )
}
