import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TRANSLATIONS, type Language } from '../data/translations';

export default function AboutInfo() {
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
                <div className='max-w-327.75 w-full  px-15      '>
                    <div className='flex items-center justify-between gap-20'>
                        <div className='flex flex-col gap-12 py-10' >
                            <div>
                                <Link className='flex pb-10 gap-3 items-center' to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>arrow-align-left</title><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path strokeDasharray="20" d="M3 3v18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" /></path><path strokeDasharray="16" strokeDashoffset="16" d="M21 12h-13.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" to="0" /></path><path strokeDasharray="8" strokeDashoffset="8" d="M7 12l4 4M7 12l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0" /></path></g></svg>
                                    {t.common.back}
                                </Link>
                                <h1 className="text-[34px] hover:text-orange-500 font-bold leading-[47.6px] text-left text-[#171718] transition-colors duration-500 ease-linear">{t.about.title}</h1>
                                <p className="mt-7.5 max-w-145 text-base font-medium text-left text-[#525458]">{t.about.welcome}</p>

                            </div>
                            <div>
                                <h1 className="text-[34px] hover:text-orange-500 font-bold leading-[47.6px] text-left text-[#171718] transition-colors duration-500 ease-linear">{t.about.collectionTitle}</h1>
                                <p className="mt-7.5 max-w-145 text-base font-medium text-left text-[#525458]">{t.about.collectionText}</p>
                            </div>
                            <div>
                                <h1 className="text-[34px] hover:text-orange-500 font-bold leading-[47.6px] text-left text-[#171718] transition-colors duration-500 ease-linear">{t.about.commitmentsTitle}</h1>
                                <p className="mt-7.5 max-w-145 text-base font-medium text-left text-[#525458]">{t.about.commitmentsText}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div>
                                <h1 className="text-[34px] hover:text-orange-500 font-bold leading-[47.6px] text-left text-[#171718] transition-colors duration-500 ease-linear">{t.about.goalTitle}</h1>
                                <p className="mt-7.5 max-w-145 text-base font-medium text-left text-[#525458]">{t.about.goalText}</p>
                            </div>
                            <div>
                                <h1 className="text-[34px] hover:text-orange-500 font-bold leading-[47.6px] text-left text-[#171718] transition-colors duration-500 ease-linear">{t.about.communityTitle}</h1>
                                <p className="mt-7.5 max-w-145 text-base font-medium text-left text-[#525458]">{t.about.communityText}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center p-25'>
                        <div className='flex items-center   border border-solid border-[#eeeeee] rounded-[14px] max-w-229.5 p-10'>
                            <div>
                                <h1 className='text-[34px] font-bold leading-[47.6px] text-left text-[#171718]'>{t.about.faqTitle}</h1>
                                <p>{t.about.faqSubtitle}</p>
                                <Link className='flex items-center justify-center cursor-pointer mt-10 max-w-65 w-full h-12 border-0 bg-[#db5300] rounded-[14px] text-base font-semibold leading-[22.4px] text-white' to="/questionmark">{t.about.faqButton}</Link>
                            </div>
                            <img className='ml-20' src="/questionmark.png" alt="questionmark" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}