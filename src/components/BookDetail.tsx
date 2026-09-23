// pages/BookDetail.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BOOKS } from '../data/books.boda';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";
import {
    TRANSLATIONS,
    translateGenre,
    type Language,
} from '../data/translations';

export default function BookDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState<string[]>(() => {
        return JSON.parse(localStorage.getItem('book-favorites') || '[]');
    });

    const [language, setLanguage] = useState<Language>(
        (localStorage.getItem('language') as Language) || 'ru'
    );

    const t = TRANSLATIONS[language];

    React.useEffect(() => {
        const changeLanguage = () => {
            setLanguage((localStorage.getItem('language') as Language) || 'ru');
        };
        window.addEventListener('languageChange', changeLanguage);
        return () => window.removeEventListener('languageChange', changeLanguage);
    }, []);

    const decodedId = decodeURIComponent(id || '');
    const book = BOOKS.find(b => `${b.title}-${b.year}` === decodedId);

    if (!book) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-5">
                <h1 className="text-2xl font-bold">Книга не найдена</h1>
                <button
                    onClick={() => navigate('/')}
                    className="px-6 py-2 bg-[#d55c11] text-white rounded-lg hover:bg-[#bd4d08]"
                >
                    Вернуться на главную
                </button>
            </div>
        );
    }

    const getTitle = (b: typeof book): string => {
        if (language === 'uz') return b.titleUz || b.title;
        if (language === 'en') return b.titleEn || b.title;
        return b.russianTitle || b.title;
    };

    const getDescription = (b: typeof book): string => {
        if (language === 'uz') return b.descriptionUz || b.description;
        if (language === 'en') return b.descriptionEn || b.description;
        return b.description;
    };

    const toggleFavorite = (bookId: string) => {
        setFavorites((prev) => {
            const updated = prev.includes(bookId)
                ? prev.filter((fav) => fav !== bookId)
                : [...prev, bookId];
            localStorage.setItem('book-favorites', JSON.stringify(updated));
            return updated;
        });
    };

    const similarBooks = BOOKS.filter(b => {
        if (b.title === book.title && b.year === book.year) return false;
        return b.genres.some(genre => book.genres.includes(genre));
    }).slice(0, 15);

    const bookId = `${book.title}-${book.year}`;
    const isFavorite = favorites.includes(bookId);

    const getStatusLabel = (status: string): string => {
        if (status === 'sale') return t.library?.statusSale || 'В продаже';
        if (status === 'gift') return t.library?.statusGift || 'Подарок';
        if (status === 'exchange') return t.library?.statusExchange || 'Обмен';
        return status;
    };

    const getTypeLabel = (type: string): string => {
        const typeMap: { [key: string]: string } = {
            'manga': t.library?.typeManga || 'Манга',
            'light_novel': t.library?.typeRanobe || 'Ранобэ',
            'book': t.library?.typeBook || 'Книга',
            'comic': t.library?.typeComic || 'Комикс',
            'programming': 'IT'
        };
        return typeMap[type] || type;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-5 pt-6">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#d55c11] transition-colors mb-8 font-medium"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    {t.common?.back || 'Назад'}
                </button>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-5 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Book Cover */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            {/* Cover Image */}
                            <div className="overflow-hidden rounded-3xl shadow-2xl mb-6">
                                <img
                                    src={book.image}
                                    alt={getTitle(book)}
                                    className="w-full aspect-[2/3] object-cover"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 mb-6">
                                <button
                                    onClick={() => toggleFavorite(bookId)}
                                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all ${isFavorite
                                        ? 'bg-red-500 text-white hover:bg-red-600'
                                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-red-500 hover:text-red-500'
                                        }`}
                                >

                                    {isFavorite ? t.library?.removeFavorite : t.library?.addFavorite}
                                </button>

                                <button className="flex-1 py-3 bg-[#d55c11] text-white rounded-xl font-semibold hover:bg-[#bd4d08] transition-colors">
                                    {t.library?.detailsButton || 'Купить'}
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="bg-white rounded-2xl p-4 space-y-3 shadow-lg">
                                <div className="flex justify-between items-center pb-3 border-b">
                                    <span className="text-gray-600 text-sm">{t.library?.statusLabel || 'Статус'}</span>
                                    <span className="font-bold text-gray-900">{getStatusLabel(book.status)}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b">
                                    <span className="text-gray-600 text-sm">{t.library?.typeLabel || 'Тип'}</span>
                                    <span className="font-bold text-gray-900">{getTypeLabel(book.type)}</span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b">
                                    <span className="text-gray-600 text-sm">{t.library?.searchLabel || 'Томов'}</span>
                                    <span className="font-bold text-gray-900">{book.volumes}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-sm">{t.library?.searchLabel || 'Год'}</span>
                                    <span className="font-bold text-gray-900">{book.year}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Book Info */}
                    <div className="lg:col-span-2">
                        {/* Header Info */}
                        <div className="mb-8">
                            <div className="flex items-start gap-3 mb-3">
                                <span className="text-yellow-400 text-2xl">★</span>
                                <div>
                                    <div className="text-3xl font-bold text-[#d55c11]">{book.rating}</div>
                                    <span className="text-sm text-gray-500">из 10</span>
                                </div>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                                {getTitle(book)}
                            </h1>
                            <p className="text-xl text-gray-600 mb-4">{book.author}</p>
                        </div>

                        {/* Price Section */}
                        <div className="bg-gradient-to-r from-[#d55c11] to-[#e67e3c] rounded-2xl p-8 mb-8 text-white shadow-lg">
                            <p className="text-sm opacity-90 mb-2">{t.library?.statusLabel || 'Цена'}</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold">{book.price}</span>
                                <span className="text-2xl">{book.currency}</span>
                            </div>
                            {book.status === 'sale' && (
                                <div className="mt-4 bg-white/20 rounded-lg px-3 py-1 inline-block text-sm font-semibold">
                                    {t.library?.saleBadge || 'Акция'}
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.library?.searchPlaceholder || 'Описание'}</h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {getDescription(book)}
                            </p>
                        </div>

                        {/* Genres */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">{t.library?.genreLabel || 'Жанры'}</h3>
                            <div className="flex flex-wrap gap-3">
                                {book.genres.map((genre) => (
                                    <span
                                        key={genre}
                                        className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium hover:bg-[#d55c11] hover:text-white transition-colors cursor-pointer"
                                    >
                                        {translateGenre(genre, language)}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Map Section */}
                        {book.mapEmbedUrl && (<div className="mb-8"> <h2 className="text-2xl font-bold text-gray-900 mb-4"> {t.library?.searchLabel || 'Где купить'} </h2> <div className="rounded-2xl overflow-hidden shadow-lg h-96 bg-gray-200"> <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0" dangerouslySetInnerHTML={{ __html: book.mapEmbedUrl }} /> </div> </div>)}
                    </div>
                </div>

                {/* Similar Books */}
                {similarBooks.length > 0 && (
                    <div className="mt-20 pt-12 border-t">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.library?.searchLabel || 'Похожие книги'}</h2>

                        <Carousel className="w-full">
                            <CarouselContent className="-ml-2 py-3">
                                {similarBooks.map((similarBook) => {
                                    const simBookId = `${similarBook.title}-${similarBook.year}`;

                                    return (
                                        <CarouselItem
                                            key={simBookId}
                                            className="basis-1/2 pl-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                                        >
                                            <div
                                                onClick={() => navigate(`/book/${encodeURIComponent(simBookId)}`)}
                                                className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer h-full"
                                            >
                                                <div className="relative overflow-hidden bg-gray-200">
                                                    <img
                                                        src={similarBook.image}
                                                        alt={getTitle(similarBook)}
                                                        className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/30" />

                                                    <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-xs font-bold text-gray-900">
                                                        <span className="text-yellow-400">★</span>
                                                        <span>{similarBook.rating}</span>
                                                    </div>
                                                </div>

                                                <div className="p-3">
                                                    <h3 className="line-clamp-2 text-sm font-bold text-gray-900 h-10">
                                                        {getTitle(similarBook)}
                                                    </h3>
                                                    <p className="mt-1 text-xs text-gray-500 truncate">{similarBook.author}</p>

                                                    <div className="mt-3 flex items-end justify-between border-t pt-2">
                                                        <div>
                                                            <p className="font-bold text-gray-900">{similarBook.price}</p>
                                                        </div>
                                                        <span className="text-xs text-gray-400">{similarBook.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>

                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                )}
            </div>
        </div>
    );
}