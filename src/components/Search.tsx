
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    TRANSLATIONS,
    GENRE_FILTER_KEYS,
    type Language
} from '../data/translations';

export default function Search() {
    const navigate = useNavigate();

    const [language, setLanguage] = useState<Language>(
        (localStorage.getItem('language') as Language) || 'ru'
    );

    const t = TRANSLATIONS[language];

    const [search, setSearch] = useState('');
    const [bookType, setBookType] = useState('');
    const [genre, setGenre] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        const changeLanguage = () => {
            setLanguage(
                (localStorage.getItem('language') as Language) || 'ru'
            );
        };

        window.addEventListener('languageChange', changeLanguage);

        return () => {
            window.removeEventListener('languageChange', changeLanguage);
        };
    }, []);

    const handleSearch = () => {
        const params = new URLSearchParams();

        const searchValue = search
            .trim()
            .replace(/\s+/g, ' ');

        if (searchValue) {
            params.set('search', searchValue);
        }

        if (bookType) {
            params.set('type', bookType);
        }

        if (genre) {
            params.set('genre', genre);
        }

        if (status) {
            params.set('status', status);
        }

        const query = params.toString();

        navigate(
            query
                ? `/ library ? ${query} `
                : '/library'
        );
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <section className="
            flex
            h-135
            flex-col
            bg-[url('/bgbooks.jpg')]
            bg-cover
            bg-center
            pt-0
        ">
            <div className="
                mx-auto
                my-auto
                w-full
                max-w-7xl
                px-5
            ">
                <div className="
                    ml-auto
                    mr-auto
                    flex
                    w-full
                    max-w-200
                ">
                    <h1 className="
                        pt-15
                        font-['Bebas_Neue',sans-serif]
                        text-left
                        text-[44px]
                        font-bold
                        leading-[55.6px]
                        tracking-[1px]
                        text-[rgb(23,23,24)]
                        [text-shadow:_10px_4px_8px_rgba(0,0,0,0.67)]
                    ">
                        {t.search.heading}
                    </h1>
                </div>

                {/* SEARCH BAR */}
                <div className="
                    mx-auto
                    mt-12
                    flex
                    w-full
                    max-w-[1198px]
                    items-center
                    justify-between
                    gap-3.5
                    rounded-xl
                    bg-white
                    py-1
                ">
                    {/* SEARCH */}
                    <div className="
                        flex
                        min-w-0
                        flex-1
                        items-center
                        gap-1.5
                        pl-4
                    ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="shrink-0"
                        >
                            <path
                                fill="currentColor"
                                d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
                            />
                        </svg>

                        <input
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            onKeyDown={handleKeyDown}
                            className="
                                min-w-0
                                w-full
                                outline-none
                            "
                            placeholder={t.search.placeholder}
                            type="search"
                        />
                    </div>

                    <span className="
                        h-8
                        border-l
                        border-solid
                        border-gray-300
                    " />

                    {/* TYPE */}
                    <select
                        name="type"
                        id="type"
                        value={bookType}
                        onChange={(e) =>
                            setBookType(e.target.value)
                        }
                        className="
                            w-36
                            cursor-pointer
                            bg-transparent
                            outline-none
                        "
                    >
                        <option value="">
                            {t.search.selectType}
                        </option>

                        <option value="book">
                            {t.search.typeRegular}
                        </option>

                        <option value="comic">
                            {t.search.typeComic}
                        </option>

                        <option value="light_novel">
                            {t.search.typeRanobe}
                        </option>

                        <option value="manga">
                            {t.search.typeManga}
                        </option>

                        <option value="programming">
                            {t.search.typeIt}
                        </option>
                    </select>

                    <span className="
                        h-8
                        border-l
                        border-solid
                        border-gray-300
                    " />

                    {/* GENRE */}
                    <select
                        name="genre"
                        id="genre"
                        value={genre}
                        onChange={(e) =>
                            setGenre(e.target.value)
                        }
                        className="
                            w-36
                            cursor-pointer
                            bg-transparent
                            outline-none
                        "
                    >
                        <option value="">
                            {t.search.selectGenre}
                        </option>

                        {GENRE_FILTER_KEYS.map((key) => (
                            <option
                                key={key}
                                value={TRANSLATIONS.ru.genre[key]}
                            >
                                {t.genre[key]}
                            </option>
                        ))}
                    </select>

                    <span className="
                        h-8
                        border-l
                        border-solid
                        border-gray-300
                    " />

                    {/* STATUS */}
                    <select
                        name="status"
                        id="status"
                        value={status}
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                        className="
                            w-36
                            cursor-pointer
                            bg-transparent
                            outline-none
                        "
                    >
                        <option value="">
                            {t.search.selectStatus}
                        </option>

                        <option value="sale">
                            {t.search.statusSale}
                        </option>

                        <option value="exchange">
                            {t.search.statusExchange}
                        </option>

                        <option value="gift">
                            {t.search.statusGift}
                        </option>
                    </select>

                    <span className="
                        h-8
                        border-l
                        border-solid
                        border-gray-300
                    " />

                    {/* BUTTON */}
                    <button
                        type="button"
                        onClick={handleSearch}
                        className="
                            mr-2
                            w-37
                            cursor-pointer
                            rounded-xl
                            bg-[rgb(219,83,0)]
                            px-4
                            py-3.5
                            text-white
                            transition
                            hover:bg-[#bd4d08]
                        "
                    >
                        {t.search.button}
                    </button>
                </div>
            </div>
        </section>
    );
}

