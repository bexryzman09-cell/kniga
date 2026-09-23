import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { BOOKS } from '../data/books.boda';

import {
    TRANSLATIONS,
    GENRE_FILTER_KEYS,
    translateGenre,
    type Language,
} from '../data/translations';

const BOOKS_PER_PAGE = 15;

export default function Library() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const [language, setLanguage] = useState<Language>(
        (localStorage.getItem('language') as Language) || 'ru'
    );

    const t = TRANSLATIONS[language];

    const [search, setSearch] = useState(
        searchParams.get('search') || ''
    );

    const [bookType, setBookType] = useState(
        searchParams.get('type') || ''
    );

    const [genre, setGenre] = useState(
        searchParams.get('genre') || ''
    );

    const [status, setStatus] = useState(
        searchParams.get('status') || ''
    );

    const [currentPage, setCurrentPage] = useState(1);

    const [favorites, setFavorites] = useState<string[]>(() => {
        try {
            return JSON.parse(
                localStorage.getItem('book-favorites') || '[]'
            );
        } catch {
            return [];
        }
    });

    const [saved, setSaved] = useState<string[]>(() => {
        try {
            return JSON.parse(
                localStorage.getItem('book-saved') || '[]'
            );
        } catch {
            return [];
        }
    });

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

    const getTitle = (book: typeof BOOKS[number]) => {
        if (language === 'uz') {
            return book.titleUz || book.title;
        }

        if (language === 'en') {
            return book.titleEn || book.title;
        }

        return book.russianTitle || book.title;
    };

    const getDescription = (book: typeof BOOKS[number]) => {
        if (language === 'uz') {
            return book.descriptionUz || book.description;
        }

        if (language === 'en') {
            return book.descriptionEn || book.description;
        }

        return book.description;
    };

    const filteredBooks = useMemo(() => {
        const value = search.trim().toLowerCase();

        return BOOKS.filter((book) => {
            if (!value) {
                return (
                    (!bookType || book.type === bookType) &&
                    (!genre || book.genres.includes(genre)) &&
                    (!status || book.status === status)
                );
            }

            const searchFields = [
                book.title,
                book.russianTitle,
                book.titleUz,
                book.titleEn,

                book.author,

                book.description,
                book.descriptionUz,
                book.descriptionEn,

                ...book.genres,
            ];

            const searchText = searchFields
                .filter(Boolean)
                .join(' ')
                .toLowerCase();

            const matchesSearch = searchText.includes(value);

            const matchesType =
                !bookType || book.type === bookType;

            const matchesGenre =
                !genre || book.genres.includes(genre);

            const matchesStatus =
                !status || book.status === status;

            return (
                matchesSearch &&
                matchesType &&
                matchesGenre &&
                matchesStatus
            );
        });
    }, [
        search,
        bookType,
        genre,
        status,
    ]);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredBooks.length / BOOKS_PER_PAGE)
    );

    const currentBooks = filteredBooks.slice(
        (currentPage - 1) * BOOKS_PER_PAGE,
        currentPage * BOOKS_PER_PAGE
    );

    const changePage = (page: number) => {
        if (page < 1 || page > totalPages) {
            return;
        }

        setCurrentPage(page);

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleSearch = (value: string) => {
        setSearch(value);
        setCurrentPage(1);
    };

    const handleType = (value: string) => {
        setBookType(value);
        setCurrentPage(1);
    };

    const handleGenre = (value: string) => {
        setGenre(value);
        setCurrentPage(1);
    };

    const handleStatus = (value: string) => {
        setStatus(value);
        setCurrentPage(1);
    };

    const resetFilters = () => {
        setSearch('');
        setBookType('');
        setGenre('');
        setStatus('');
        setCurrentPage(1);

        window.history.replaceState(
            {},
            '',
            '/library'
        );
    };

    const toggleFavorite = (
        bookId: string,
        e: React.MouseEvent
    ) => {
        e.stopPropagation();

        setFavorites((prev) => {
            const updated = prev.includes(bookId)
                ? prev.filter((id) => id !== bookId)
                : [...prev, bookId];

            localStorage.setItem(
                'book-favorites',
                JSON.stringify(updated)
            );

            return updated;
        });
    };

    const toggleSave = (
        bookId: string,
        e: React.MouseEvent
    ) => {
        e.stopPropagation();

        setSaved((prev) => {
            const updated = prev.includes(bookId)
                ? prev.filter((id) => id !== bookId)
                : [...prev, bookId];

            localStorage.setItem(
                'book-saved',
                JSON.stringify(updated)
            );

            return updated;
        });
    };

    const goToStatus = (value: string) => {
        setStatus(value);
        setCurrentPage(1);
    };

    return (
        <section className="min-h-screen bg-white">
            <div className="mx-auto w-full max-w-[1440px] px-4 pb-20 pt-6 sm:px-6 lg:px-8">

                {/* TOP */}
                <div className="mb-8 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="
                            group
                            flex
                            cursor-pointer
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-gray-500
                            transition-colors
                            hover:text-[#d55c11]
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="transition-transform duration-200 group-hover:-translate-x-1"
                        >
                            <path d="M19 12H5" />
                            <path d="m12 19-7-7 7-7" />
                        </svg>

                        {t.common?.back || 'Назад'}
                    </button>

                    <div className="text-sm font-medium text-gray-400">
                        {filteredBooks.length}{' '}
                        {language === 'ru'
                            ? 'книг'
                            : language === 'uz'
                                ? 'kitob'
                                : 'books'}
                    </div>
                </div>

                {/* TITLE */}
                <div className="mb-7">
                    <h1 className="
                        text-3xl
                        font-bold
                        tracking-tight
                        text-[#171718]
                        sm:text-4xl
                    ">
                        {t.library?.title || 'Библиотека'}
                    </h1>

                    <p className="
                        mt-2
                        max-w-2xl
                        text-sm
                        leading-6
                        text-gray-500
                        sm:text-base
                    ">
                        {t.library?.searchLabel ||
                            'Найдите нужную книгу среди нашей коллекции'}
                    </p>
                </div>

                {/* STATUS TABS */}
                <div className="
                    mb-7
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    border-b
                    border-gray-200
                ">
                    <button
                        type="button"
                        onClick={() => goToStatus('')}
                        className={`
                            cursor-pointer
                            border-b-2
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            transition-all
                            ${status === ''
                                ? 'border-[#d55c11] text-[#d55c11]'
                                : 'border-transparent text-gray-500 hover:text-gray-900'
                            }
                        `}
                    >
                        {t.library?.allStatuses || 'Все книги'}
                    </button>

                    <button
                        type="button"
                        onClick={() => goToStatus('sale')}
                        className={`
                            cursor-pointer
                            border-b-2
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            transition-all
                            ${status === 'sale'
                                ? 'border-[#d55c11] text-[#d55c11]'
                                : 'border-transparent text-gray-500 hover:text-gray-900'
                            }
                        `}
                    >
                        {t.library?.statusSale || 'Новые книги'}
                    </button>

                    <button
                        type="button"
                        onClick={() => goToStatus('exchange')}
                        className={`
                            cursor-pointer
                            border-b-2
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            transition-all
                            ${status === 'exchange'
                                ? 'border-[#d55c11] text-[#d55c11]'
                                : 'border-transparent text-gray-500 hover:text-gray-900'
                            }
                        `}
                    >
                        {t.library?.statusExchange || 'Обмен'}
                    </button>

                    <button
                        type="button"
                        onClick={() => goToStatus('gift')}
                        className={`
                            cursor-pointer
                            border-b-2
                            px-4
                            py-3
                            text-sm
                            font-semibold
                            transition-all
                            ${status === 'gift'
                                ? 'border-[#d55c11] text-[#d55c11]'
                                : 'border-transparent text-gray-500 hover:text-gray-900'
                            }
                        `}
                    >
                        {t.library?.statusGift || 'Подарок'}
                    </button>
                </div>

                {/* SEARCH + FILTERS */}
                <div className="
                    mb-8
                    grid
                    grid-cols-1
                    gap-3
                    md:grid-cols-2
                    lg:grid-cols-[minmax(280px,1.8fr)_1fr_1fr_auto]
                ">
                    {/* SEARCH */}
                    <div className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="
                                pointer-events-none
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-gray-400
                            "
                        >
                            <circle
                                cx="11"
                                cy="11"
                                r="8"
                            />
                            <path d="m21 21-4.3-4.3" />
                        </svg>

                        <input
                            type="search"
                            value={search}
                            onChange={(e) =>
                                handleSearch(e.target.value)
                            }
                            placeholder={
                                t.library?.searchPlaceholder ||
                                'Название или автор'
                            }
                            className="
                                h-12
                                w-full
                                rounded-xl
                                border
                                border-gray-200
                                bg-gray-50
                                pl-11
                                pr-4
                                text-sm
                                text-gray-900
                                outline-none
                                transition-all
                                placeholder:text-gray-400
                                focus:border-[#d55c11]
                                focus:bg-white
                            "
                        />
                    </div>

                    {/* TYPE */}
                    <select
                        value={bookType}
                        onChange={(e) =>
                            handleType(e.target.value)
                        }
                        className="
                            h-12
                            w-full
                            cursor-pointer
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50
                            px-4
                            text-sm
                            font-medium
                            text-gray-700
                            outline-none
                            transition-all
                            focus:border-[#d55c11]
                            focus:bg-white
                        "
                    >
                        <option value="">
                            {t.library?.allTypes || 'Все типы'}
                        </option>

                        <option value="book">
                            {t.library?.typeBook || 'Книга'}
                        </option>

                        <option value="manga">
                            {t.library?.typeManga || 'Манга'}
                        </option>

                        <option value="light_novel">
                            {t.library?.typeRanobe || 'Ранобэ'}
                        </option>

                        <option value="comic">
                            {t.library?.typeComic || 'Комикс'}
                        </option>

                        <option value="programming">
                            IT
                        </option>
                    </select>

                    {/* GENRE */}
                    <select
                        value={genre}
                        onChange={(e) =>
                            handleGenre(e.target.value)
                        }
                        className="
                            h-12
                            w-full
                            cursor-pointer
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50
                            px-4
                            text-sm
                            font-medium
                            text-gray-700
                            outline-none
                            transition-all
                            focus:border-[#d55c11]
                            focus:bg-white
                        "
                    >
                        <option value="">
                            {t.library?.allGenres || 'Все жанры'}
                        </option>

                        {GENRE_FILTER_KEYS.map((key) => (
                            <option
                                key={key}
                                value={TRANSLATIONS.ru.genre[key]}
                            >
                                {t.genre?.[key] || key}
                            </option>
                        ))}
                    </select>

                    {/* RESET */}
                    <button
                        type="button"
                        onClick={resetFilters}
                        className="
                            flex
                            h-12
                            cursor-pointer
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-gray-200
                            bg-white
                            px-5
                            text-sm
                            font-semibold
                            text-gray-600
                            transition-all
                            hover:border-[#d55c11]
                            hover:text-[#d55c11]
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M3 12a9 9 0 0 1 9-9 9.7 9.7 0 0 1 6.7 2.7L21 8" />
                            <path d="M21 3v5h-5" />
                            <path d="M21 12a9 9 0 0 1-9 9 9.7 9.7 0 0 1-6.7-2.7L3 16" />
                            <path d="M3 21v-5h5" />
                        </svg>

                        {t.library?.resetFiltersTitle ||
                            'Сбросить'}
                    </button>
                </div>

                {/* RESULTS INFO */}
                <div className="
                    mb-5
                    flex
                    items-center
                    justify-between
                    gap-4
                ">
                    <p className="text-sm text-gray-500">
                        {t.library?.booksFound || 'Найдено книг'}:
                        <span className="ml-1 font-bold text-[#171718]">
                            {filteredBooks.length}
                        </span>
                    </p>
                </div>

                {/* BOOKS */}
                {currentBooks.length > 0 ? (
                    <div className="
                        grid
                        grid-cols-2
                        gap-x-4
                        gap-y-8
                        sm:grid-cols-3
                        md:grid-cols-4
                        lg:grid-cols-5
                        xl:grid-cols-5
                        2xl:grid-cols-6
                    ">
                        {currentBooks.map((book) => {
                            const bookId =
                                `${book.title}-${book.year}`;

                            const isFavorite =
                                favorites.includes(bookId);

                            const isSaved =
                                saved.includes(bookId);

                            return (
                                <article
                                    key={bookId}
                                    onClick={() =>
                                        navigate(
                                            `/book/${encodeURIComponent(bookId)}`
                                        )
                                    }
                                    className="
                                        group
                                        cursor-pointer
                                    "
                                >
                                    {/* COVER */}
                                    <div className="
                                        relative
                                        mb-3
                                        aspect-[2/3]
                                        w-full
                                        overflow-hidden
                                        rounded-xl
                                        bg-gray-100
                                        shadow-[0_4px_18px_rgba(0,0,0,0.08)]
                                    ">
                                        <img
                                            src={book.image}
                                            alt={getTitle(book)}
                                            loading="lazy"
                                            className="
                                                h-full
                                                w-full
                                                object-cover
                                                transition-transform
                                                duration-500
                                                group-hover:scale-[1.035]
                                            "
                                        />

                                        {/* OVERLAY */}
                                        <div className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black/35
                                            via-transparent
                                            to-transparent
                                            opacity-0
                                            transition-opacity
                                            duration-300
                                            group-hover:opacity-100
                                        " />

                                        {/* RATING */}
                                        <div className="
                                            absolute
                                            left-2.5
                                            top-2.5
                                            flex
                                            items-center
                                            gap-1
                                            rounded-md
                                            bg-white/95
                                            px-2
                                            py-1
                                            text-xs
                                            font-bold
                                            text-gray-800
                                            shadow-sm
                                        ">
                                            <span className="text-yellow-400">
                                                ★
                                            </span>

                                            {book.rating}
                                        </div>

                                        {/* ACTIONS */}
                                        <div className="
                                            absolute
                                            bottom-3
                                            right-3
                                            flex
                                            gap-2
                                            opacity-0
                                            translate-y-2
                                            transition-all
                                            duration-300
                                            group-hover:translate-y-0
                                            group-hover:opacity-100
                                        ">
                                            <button
                                                type="button"
                                                onClick={(e) =>
                                                    toggleFavorite(
                                                        bookId,
                                                        e
                                                    )
                                                }
                                                aria-label="Избранное"
                                                className={`
                                                    flex
                                                    h-9
                                                    w-9
                                                    cursor-pointer
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    shadow-lg
                                                    backdrop-blur
                                                    transition-all
                                                    hover:scale-105
                                                    ${isFavorite
                                                        ? 'bg-red-500 text-white'
                                                        : 'bg-white text-gray-800 hover:bg-[#d55c11] hover:text-white'
                                                    }
                                                `}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="17"
                                                    height="17"
                                                    viewBox="0 0 24 24"
                                                    fill={
                                                        isFavorite
                                                            ? 'currentColor'
                                                            : 'none'
                                                    }
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                >
                                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                                                </svg>
                                            </button>

                                            <button
                                                type="button"
                                                onClick={(e) =>
                                                    toggleSave(
                                                        bookId,
                                                        e
                                                    )
                                                }
                                                aria-label="Сохранить"
                                                className={`
                                                    flex
                                                    h-9
                                                    w-9
                                                    cursor-pointer
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    shadow-lg
                                                    backdrop-blur
                                                    transition-all
                                                    hover:scale-105
                                                    ${isSaved
                                                        ? 'bg-gray-900 text-white'
                                                        : 'bg-white text-gray-800 hover:bg-[#d55c11] hover:text-white'
                                                    }
                                                `}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="17"
                                                    height="17"
                                                    viewBox="0 0 24 24"
                                                    fill={
                                                        isSaved
                                                            ? 'currentColor'
                                                            : 'none'
                                                    }
                                                    stroke="currentColor"
                                                    strokeWidth="1.8"
                                                >
                                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* INFO */}
                                    <div className="px-0.5">
                                        <h2 className="
                                            line-clamp-2
                                            min-h-[40px]
                                            text-[15px]
                                            font-bold
                                            leading-5
                                            text-[#171718]
                                            transition-colors
                                            group-hover:text-[#d55c11]
                                        ">
                                            {getTitle(book)}
                                        </h2>

                                        <p className="
                                            mt-1
                                            truncate
                                            text-xs
                                            font-medium
                                            text-gray-500
                                        ">
                                            {book.author}
                                        </p>

                                        <div className="
                                            mt-2
                                            flex
                                            items-center
                                            justify-between
                                            gap-2
                                        ">
                                            <span className="
                                                truncate
                                                text-sm
                                                font-bold
                                                text-[#171718]
                                            ">
                                                {book.price}
                                            </span>

                                            <span className="
                                                shrink-0
                                                text-[11px]
                                                font-medium
                                                text-gray-400
                                            ">
                                                {book.year}
                                            </span>
                                        </div>

                                        <div className="
                                            mt-2
                                            flex
                                            gap-1
                                            overflow-hidden
                                        ">
                                            {book.genres
                                                .slice(0, 1)
                                                .map((bookGenre) => (
                                                    <span
                                                        key={bookGenre}
                                                        className="
                                                            truncate
                                                            rounded
                                                            bg-gray-100
                                                            px-2
                                                            py-1
                                                            text-[10px]
                                                            font-semibold
                                                            text-gray-500
                                                        "
                                                    >
                                                        {translateGenre(
                                                            bookGenre,
                                                            language
                                                        )}
                                                    </span>
                                                ))}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="
                        flex
                        min-h-[360px]
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-gray-200
                        bg-gray-50
                        px-5
                        text-center
                    ">
                        <div className="
                            mb-4
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-full
                            bg-white
                            text-3xl
                            shadow-sm
                        ">
                            📚
                        </div>

                        <h2 className="
                            text-xl
                            font-bold
                            text-[#171718]
                        ">
                            {t.library?.noBooksFound ||
                                'Книги не найдены'}
                        </h2>

                        <p className="
                            mt-2
                            max-w-md
                            text-sm
                            leading-6
                            text-gray-500
                        ">
                            Попробуйте изменить поиск или параметры
                            фильтрации.
                        </p>

                        <button
                            type="button"
                            onClick={resetFilters}
                            className="
                                mt-5
                                cursor-pointer
                                rounded-lg
                                bg-[#d55c11]
                                px-5
                                py-2.5
                                text-sm
                                font-bold
                                text-white
                                transition-colors
                                hover:bg-[#bb4e0b]
                            "
                        >
                            {t.library?.resetFiltersTitle ||
                                'Сбросить фильтры'}
                        </button>
                    </div>
                )}

                {/* PAGINATION */}
                {totalPages > 1 && (
                    <div className="
                        mt-12
                        flex
                        items-center
                        justify-center
                        gap-2
                    ">
                        <button
                            type="button"
                            disabled={currentPage === 1}
                            onClick={() =>
                                changePage(currentPage - 1)
                            }
                            className="
                                flex
                                h-10
                                w-10
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-gray-200
                                bg-white
                                text-gray-600
                                transition-all
                                hover:border-[#d55c11]
                                hover:text-[#d55c11]
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            ‹
                        </button>

                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((page) => (
                            <button
                                key={page}
                                type="button"
                                onClick={() =>
                                    changePage(page)
                                }
                                className={`
                                    flex
                                    h-10
                                    min-w-10
                                    cursor-pointer
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    px-3
                                    text-sm
                                    font-semibold
                                    transition-all
                                    ${currentPage === page
                                        ? 'border-[#d55c11] bg-[#d55c11] text-white'
                                        : 'border-gray-200 bg-white text-gray-700 hover:border-[#d55c11] hover:text-[#d55c11]'
                                    }
                                `}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            type="button"
                            disabled={currentPage === totalPages}
                            onClick={() =>
                                changePage(currentPage + 1)
                            }
                            className="
                                flex
                                h-10
                                w-10
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-lg
                                border
                                border-gray-200
                                bg-white
                                text-gray-600
                                transition-all
                                hover:border-[#d55c11]
                                hover:text-[#d55c11]
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >
                            ›
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}