import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TRANSLATIONS, type Language } from '../data/translations';

export default function Questionmark() {
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
        <>
            <section>
                <div className=' p-5 mx-12.5   max-w-302.5 w-full'>
                    <div className='flex flex-col pb-27.5 ' >
                        <Link className='flex max-w-20 py-10  gap-3 items-center' to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>arrow-align-left</title><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="20" d="M3 3v18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" /></path><path strokeDasharray="16" strokeDashoffset="16" d="M21 12h-13.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" to="0" /></path><path strokeDasharray="8" strokeDashoffset="8" d="M7 12l4 4M7 12l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0" /></path></g></svg>
                            {t.common.back}
                        </Link>
                        <h1 className='mb-2 text-[34px] font-bold leading-[47.6px] text-left text-[#171718]'>{t.faq.title}</h1>

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">
                                <span>{t.faq.offer.title}</span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    {t.faq.offer.items.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.strong}</strong> {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </details>

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">
                                <span>{t.faq.whyUs.title}</span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    {t.faq.whyUs.items.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.strong}</strong> {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </details>

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">
                                <span>{t.faq.howItWorks.title}</span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    {t.faq.howItWorks.items.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.strong}</strong> {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </details>

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">
                                <span>{t.faq.ourTeam.title}</span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    {t.faq.ourTeam.items.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.strong}</strong> {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </details>

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">
                                <span>{t.faq.join.title}</span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    {t.faq.join.items.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.strong}</strong> {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </details>

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">
                                <span>{t.faq.contact.title}</span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    {t.faq.contact.items.map((item, index) => (
                                        <li key={index}>
                                            <strong>{item.strong}</strong> {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </details>

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">
                                <span>{t.faq.followUs.title}</span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    <li>{t.faq.followUs.intro}</li>
                                    <li>
                                        <strong>{t.faq.followUs.telegramLabel}</strong> <a href="">{t.faq.followUs.linkText}</a>
                                    </li>
                                    <li>
                                        <strong>{t.faq.followUs.websiteLabel}</strong> <a href="">{t.faq.followUs.linkText}</a>
                                    </li>
                                    <li>{t.faq.followUs.thanks}</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

        </>
    )
}