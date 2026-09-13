import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <>
            <header className='sticky top-0 left-0 w-full flex z-250 bg-[#f6f6fa] shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] items-center justify-between p-1 pl-10'>
               <a href=""> <img width={100} src="/logo.jpg" alt="Logo" /></a>
                <div className='flex ml-2.5   pb-2.5  items-center '>
                    <nav className='flex gap-9 items-center '>
                        <Link className='hover:text-orange-500 duration-400' to="/about"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><title>love-it-outline</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 21.844l-9.588-10a5.67 5.67 0 0 1-1.063-6.55v0a5.673 5.673 0 0 1 9.085-1.475L12 5.384l1.566-1.565a5.673 5.673 0 0 1 8.023 8.022z" /></svg></Link>
                        <Link className='hover:text-orange-500 duration-400' to="/about"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="28" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path></svg></Link>
                        <Link className='hover:text-orange-500 duration-400' to="/about">О нас</Link>
                        <select className=' cursor-pointer border rounded-md w-16 p-1  border-gray-300 ' name="language" id="language">
                            <option value="ru">Ru</option>
                            <option value="uz">Uz</option>
                            <option value="eng">Eng</option>
                        </select>
                        <Link className='bg-[rgb(219,83,0)] mr-3.5 text-white py-3 px-8 rounded-xl ' to='/login'>login</Link>

                    </nav>
                </div>
            </header>
        </>
    )
}
