import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TRANSLATIONS, type Language } from '../data/translations';

export default function Types() {
    const [language, setLanguage] = useState<Language>(
        (localStorage.getItem('language') as Language) || 'ru'
    );

    const t = TRANSLATIONS[language];

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

    return (
        <section>
            <div className="max-w-7xl w-full m-auto px-5">
                <div className="flex gap-5 justify-center">

                    {/* НОВЫЕ КНИГИ */}
                    <Link
                        className="flex gap-6 text-center rounded-[14px] shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-1.5 active:-translate-y-0.5 max-w-100 w-full flex-col px-25 pt-20 pb-10 text-[24px] text-[rgb(23,23,24)] mt-11 uppercase leading-[33.6px]"
                        to="/library?status=sale"
                    >
                        <img
                            width={250}
                            src="/new_books.svg"
                            alt="new-books"
                        />
                        {t.types.newBooks}
                    </Link>

                    {/* ОБМЕН КНИГАМИ */}
                    <Link
                        className="flex gap-6 text-center rounded-[14px] shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-1.5 active:-translate-y-0.5 max-w-100 w-full flex-col px-25 pt-20 pb-10 text-[24px] text-[rgb(23,23,24)] mt-11 uppercase leading-[33.6px]"
                        to="/library?status=exchange"
                    >
                        <img
                            src="/exchange_books.svg"
                            alt="exchange-books"
                        />
                        {t.types.exchangeBooks}
                    </Link>

                    {/* ПОДАРОЧНЫЕ КНИГИ */}
                    <Link
                        className="flex gap-6 text-center rounded-[14px] shadow-[0_5px_20px_0_rgba(214,219,225,0.4)] cursor-pointer transition-all duration-500 ease-in-out hover:-translate-y-1.5 active:-translate-y-0.5 max-w-100 w-full flex-col px-25 pt-20 pb-10 text-[24px] text-[rgb(23,23,24)] mt-11 uppercase leading-[33.6px]"
                        to="/library?status=gift"
                    >
                        <img
                            src="/gift_books.svg"
                            alt="gift-books"
                        />
                        {t.types.giftBooks}
                    </Link>

                </div>
            </div>
        </section>
    );
}