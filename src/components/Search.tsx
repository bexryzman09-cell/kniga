

export default function Search() {
    return (
        <>
            <section className=" flex flex-col h-135 pt-0   bg-[url('/bgbooks.jpg')] bg-cover bg-center">
             <div className="max-w-7xl w-full m-auto  px-5">
                   <div className="flex max-w-200 w-fu  ll ml-117.5 ">
                    <h1 className=" pt-15 font-['Bebas_Neue',sans-serif] text-[44px] font-bold leading-[55.6px] tracking-[1px] text-left text-[rgb(23,23,24)] text-[text-shadow:_10px_4px_8px_rgba(0,0,0,0.67)]">Не позволяйте готовым книгам пылиться на полке. Поделитесь ими, продайте или обменяйте на другую книгу!</h1>
                </div>

                <div className="w-299.5 flex  justify-between py-1 mt-12 ml-20 bg-white  rounded-xl   gap-3.5">
                    <div className="flex items-center pl-4 gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>baseline-search</title><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" /></svg>
                        <input className="w-100 outline-none  " placeholder="Что Вы ищите?" type="search" />
                    </div>
                    <span className="border-l  border-solid border-gray-300"></span>
                    <select className="" name="" id="">
                        <option value="" disabled selected hidden>Выберите тип</option>
                        <option value="">обычная книга</option>
                        <option value="">комикс</option>
                        <option value="">ранобэ</option>
                        <option value="">манга</option>
                        <option value="">IT/программирование</option>
                    </select>
                    <span className="border-l border-solid border-gray-300"></span>
                    <select name="genre" id="genre">
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
                    <span className="border-l border-solid border-gray-300"></span>
                    <select name="" id="">
                        <option value="" disabled selected hidden>Выберите статус</option>
                        <option value="">продажа</option>
                        <option value="">обмен</option>
                        <option value="">подарок</option>
                    </select>
                    <span className="border-l border-solid border-gray-300"></span>
                    <button className="cursor-pointer    bg-[rgb(219,83,0)] mr-3.5 text-white py-3.5  w-37 rounded-xl">Поиск</button>

                </div>
             </div>
            </section>

        </>
    )
}
