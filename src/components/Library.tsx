import { Link } from 'react-router-dom';

export default function Library() {
    return (
        <>
            <section>
                <div className='max-w-337.75 w-full pb-27.5 pt-25'>
                    <div className='max-w-302.5 mx-12.5 w-full px-5'>
                        <Link className='flex max-w-22.5 pb-10 gap-3 items-center' to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>arrow-align-left</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" d="M3 3v18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" /></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M21 12h-13.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" to="0" /></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M7 12l4 4M7 12l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0" /></path></g></svg>
                            Назад
                        </Link>
                        <h1 className='flex mb-7 items-center gap-3 text-4xl font-semibold'>Библиотека <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="368" x="32" y="96" fill="none" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></rect><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 224h128M112 400h128"></path><rect width="128" height="304" x="112" y="160" fill="none" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></rect><rect width="96" height="416" x="256" y="48" fill="none" stroke-linejoin="round" stroke-width="32" rx="16" ry="16"></rect><path fill="none" stroke-linejoin="round" stroke-width="32" d="m422.46 96.11-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89z"></path></svg></h1>
                        <div className='flex flex-col  '>
                            <form className='flex justify-between items-center'>

                                <label className='max-w-60 w-full flex flex-col items-start gap-1.75 text-[#525458] font-medium '>
                                    <span>Название книги и автор</span>
                                    <input className='min-w-56 py-3.25 px-2  rounded-[14px] border border-[#d6dbe1] bg-white outline-none placeholder-[#000000] w-full ' placeholder="Название книг" type="search" />
                                </label>
                                <label className='flex flex-col max-w-60 w-full  items-start gap-1.75 text-[#525458] font-medium'>
                                    <span>Тип книги</span>
                                    <select className='min-w-56 py-3.25 px-2  rounded-[14px] border border-[#d6dbe1] bg-white outline-none placeholder-[#000000] w-full ' name="" id="">
                                        <option value="" disabled selected hidden>Выберите тип</option>
                                        <option value="">обычная книга</option>
                                        <option value="">комикс</option>
                                        <option value="">ранобэ</option>
                                        <option value="">манга</option>
                                        <option value="">IT/программирование</option>
                                    </select>
                                </label>
                                <label className='flex flex-col max-w-60 w-full  items-start gap-1.75 text-[#525458] font-medium'>
                                    <span>
                                        Жанр</span>
                                    <select className='min-w-56 py-3.25 px-2  rounded-[14px] border border-[#d6dbe1] bg-white outline-none placeholder-[#000000] w-full ' name="genre" id="genre">
                                        <option value="" disabled selected hidden>Выберите жанр</option>
                                        <option value="IT">IT</option>
                                        <option value="Антиутопия">Антиутопия</option>
                                        <option value="Биография">Биография</option>
                                        <option value="Боевик">Боевик</option>
                                        <option value="Вдохновляющая">Вдохновляющая</option>
                                        <option value="Веб-разработка">Веб-разработка</option>
                                        <option value="Детектив">Детектив</option>
                                        <option value="Драма">Драма</option>
                                        <option value="Исекай">Исекай</option>
                                        <option value="Историческая">Историческая</option>
                                        <option value="История">История</option>
                                        <option value="Карьера">Карьера</option>
                                        <option value="Классика">Классика</option>
                                        <option value="Комедия">Комедия</option>
                                        <option value="Комикс">Комикс</option>
                                        <option value="Криминал">Криминал</option>
                                        <option value="Мистика">Мистика</option>
                                        <option value="Молодёжная">Молодёжная</option>
                                        <option value="Приключения">Приключения</option>
                                        <option value="Программирование">Программирование</option>
                                        <option value="Профессиональная">Профессиональная</option>
                                        <option value="Психологическая">Психологическая</option>
                                        <option value="Роман">Роман</option>
                                        <option value="Романтика">Романтика</option>
                                        <option value="Русская литература">Русская литература</option>
                                        <option value="Сверхъестественное">Сверхъестественное</option>
                                        <option value="Спорт">Спорт</option>
                                        <option value="Супергерои">Супергерои</option>
                                        <option value="Тёмное">Тёмное</option>
                                        <option value="Триллер">Триллер</option>
                                        <option value="Ужасы">Ужасы</option>
                                        <option value="Учебная">Учебная</option>
                                        <option value="Фантастика">Фантастика</option>
                                        <option value="Фэнтези">Фэнтези</option>
                                        <option value="Хобби">Хобби</option>
                                        <option value="Школа">Школа</option>
                                    </select>
                                </label>
                                <label className='flex flex-col max-w-60 w-full  items-start gap-1.75 text-[#525458] font-medium'>
                                    <span>Типы:</span>
                                    <select className='min-w-56 py-3.25 px-2  rounded-[14px] border border-[#d6dbe1] bg-white outline-none placeholder-[#000000] w-full ' name="" id="">
                                        <option value="" disabled selected hidden>Выберите статус</option>
                                        <option value="">продажа</option>
                                        <option value="">обмен</option>
                                        <option value="">подарок</option>
                                    </select>
                                </label>
                                <button
                                    type="reset"
                                    className="flex items-center justify-center mt-10 cursor-pointer py-3.25 px-2 max-w-19.5 w-full text-[#ffffff] rounded-[10px] bg-[#d55c11] border border-transparent"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 1024 1024"
                                    >
                                        <title>clear-outlined</title>
                                        <path
                                            fill="currentColor"
                                            d="m899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6c-.3 1.5-.4 3-.4 4.4c0 14.4 11.6 26 26 26h723c1.5 0 3-.1 4.4-.4c14.2-2.4 23.7-15.9 21.2-30M204 390h272V182h72v208h272v104H204zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260z"
                                        />
                                    </svg>
                                </button>
                            </form>
                            <div className='flex flex-col items-center  justify-center'>
                                <img className='flex' width={500} src="empty.png" alt="" />
                                <Link className='bg-[rgb(219,83,0)] mr-3.5 text-white py-3 px-8 rounded-xl ' to='/'>Вернутса на главную страницу</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
