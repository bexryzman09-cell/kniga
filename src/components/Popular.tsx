// pages/Popular.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BOOKS } from '../data/books.boda';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  TRANSLATIONS,
  translateGenre,
  type Language,
} from '../data/translations';

export default function Popular() {
  const navigate = useNavigate();

  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem('language') as Language) || 'ru'
  );

  const t = TRANSLATIONS[language];

  const [favorites, setFavorites] = useState<string[]>(() => {
    return JSON.parse(
      localStorage.getItem('book-favorites') || '[]'
    );
  });

  const [saved, setSaved] = useState<string[]>(() => {
    return JSON.parse(
      localStorage.getItem('book-saved') || '[]'
    );
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

  const popularBooks = [...BOOKS]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);

  const toggleFavorite = (bookId: string) => {
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

  const toggleSave = (bookId: string) => {
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

  const getTitle = (book: typeof BOOKS[number]) => {
    if (language === 'uz') {
      return book.titleUz;
    }

    if (language === 'en') {
      return book.titleEn;
    }

    return book.russianTitle;
  };

  const getDescription = (book: typeof BOOKS[number]) => {
    if (language === 'uz') {
      return book.descriptionUz;
    }

    if (language === 'en') {
      return book.descriptionEn;
    }

    return book.description;
  };

  return (
    <section>

      <div className="max-w-7xl w-full mx-auto px-5">

        {/* TOP */}

        <div className="flex items-center justify-between">

          <Link
            to="/library"
            className="flex items-center gap-2 py-5 pt-6 text-2xl font-bold"
          >
            {t.popular.title}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m9 5l6 7l-6 7"
              />
            </svg>
          </Link>

        </div>


        {/* CAROUSEL */}

        <Carousel className="w-full mb-20">

          <CarouselContent className="-ml-2 py-3">

            {popularBooks.map((book, index) => {

              const bookId = `${book.title}-${book.year}`;

              const isFavorite = favorites.includes(bookId);
              const isSaved = saved.includes(bookId);

              return (
                <CarouselItem
                  key={bookId}
                  className="basis-1/2 pl-2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >

                  <div
                    onClick={() => navigate(`/book/${encodeURIComponent(bookId)}`)}
                    className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.14)] cursor-pointer"
                  >

                    {/* IMAGE */}

                    <div className="relative overflow-hidden">

                      <img
                        src={book.image}
                        alt={getTitle(book)}
                        className="aspect-[2/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/25" />

                      {/* NUMBER */}

                      <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                        #{index + 1}
                      </div>

                      {/* RATING */}

                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-[#171718]">
                        <span className="text-yellow-500">★</span>
                        {book.rating}
                      </div>

                      {/* ACTIONS */}

                      <div className="absolute bottom-3 right-3 flex gap-2">

                        {/* FAVORITE */}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(bookId);
                          }}
                          title={
                            isFavorite
                              ? t.library.removeFavorite
                              : t.library.addFavorite
                          }
                          className={`flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${isFavorite
                            ? 'bg-red-500 text-white'
                            : 'bg-white/95 text-[#171718] hover:bg-black hover:text-white'
                            }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill={isFavorite ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                          </svg>
                        </button>


                        {/* SAVE */}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSave(bookId);
                          }}
                          title={
                            isSaved
                              ? t.library.unsave
                              : t.library.save
                          }
                          className={`flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${isSaved
                            ? 'bg-[#171718] text-white'
                            : 'bg-white/95 text-[#171718] hover:bg-black hover:text-white'
                            }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill={isSaved ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 0 2-2h10a2 2 0 0 1 2 2z" />
                          </svg>
                        </button>

                      </div>

                    </div>


                    {/* CONTENT */}

                    <div className="p-4">

                      {/* TITLE */}

                      <h3 className="line-clamp-2 min-h-[48px] text-[16px] font-bold leading-6 text-[#171718]">
                        {getTitle(book)}
                      </h3>

                      {/* DESCRIPTION */}

                      <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                        {getDescription(book)}
                      </p>

                      {/* AUTHOR */}

                      <p className="mt-1 truncate text-sm text-gray-500">
                        {book.author}
                      </p>


                      {/* GENRES */}

                      <div className="mt-3 flex gap-1.5 overflow-hidden">

                        {book.genres.slice(0, 2).map((genre) => (
                          <span
                            key={genre}
                            className="whitespace-nowrap rounded-full bg-[#f3f3f3] px-2.5 py-1 text-[11px] font-medium text-gray-600"
                          >
                            {translateGenre(genre, language)}
                          </span>
                        ))}

                      </div>


                      {/* PRICE */}

                      <div className="mt-4 flex items-end justify-between border-t border-gray-100 pt-3">

                        <div>

                          <p className="text-lg font-bold text-[#171718]">
                            {book.price} {book.currency}
                          </p>

                          {book.status === 'sale' && (
                            <span className="text-[11px] font-medium text-green-600">
                              {t.library.saleBadge}
                            </span>
                          )}

                        </div>

                        <span className="text-xs font-medium text-gray-400">
                          {book.year}
                        </span>

                      </div>


                      {/* DETAILS */}

                      <button
                        type="button"
                        onClick={() => navigate(`/book/${encodeURIComponent(bookId)}`)}
                        className="mt-4 w-full rounded-xl bg-[#171718] py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#333] active:scale-[0.98]"
                      >
                        {t.library.detailsButton}
                      </button>

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
    </section>
  );
}