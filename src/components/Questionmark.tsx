import { Link } from 'react-router-dom';

export default function Questionmark() {
    return (
        <>
            <section>
                <div className=' p-5 mx-12.5   max-w-302.5 w-full'>
                    <div className='flex flex-col pb-27.5 ' >
                        <Link className='flex max-w-20 py-10  gap-3 items-center' to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>arrow-align-left</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" d="M3 3v18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" /></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M21 12h-13.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" to="0" /></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M7 12l4 4M7 12l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0" /></path></g></svg>
                            Назад
                        </Link>
                        <h1 className='mb-2 text-[34px] font-bold leading-[47.6px] text-left text-[#171718]'>Вопрос и ответ</h1>
                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">

                                <span>
                                    что мы предлагаем
                                </span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    <li>
                                        <strong>Обмен книгами:</strong> если у вас есть прочитанные книги, не позволяйте им пылиться...
                                    </li>
                                    <li><strong>Покупайте и продавайте:</strong> продавайте подержанные книги или находите их по низким ценам...</li>
                                    <li><strong>Пожервуйте:</strong> поделитесь радостью чтения с друзьями и близкими...</li>
                                    <li><strong>Обмен:</strong> обменивайте свои книги на другие, не тратя много денег...</li>
                                </ul>
                            </div>
                        </details >
                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">

                                <span>
                                    Почему выберают нас
                                </span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    <li>
                                        <strong>Сообщество:</strong> присоединяйтесь к сети читателей, которые любят чтение и устойчивое развитие. Подключайтесь и открывайте для себя новые книги, рекомендованные другими участниками.
                                    </li>
                                    <li><strong>Удобно:</strong> нашей платформой легко пользоваться, легко размещать свои книги и находить новые книги.</li>
                                    <li><strong>Пожервуйте:</strong> поделитесь радостью чтения с друзьями и близкими...</li>
                                    <li><strong> В Book мы считаем, </strong> что каждая книга заслуживает того, чтобы ее читали и наслаждались ею снова и снова. Связывая новых читателей с теми, кому книги больше не нужны, это приносит пользу окружающей среде и любителям книг. Мы создаем ситуацию</li>
                                </ul>
                            </div>
                        </details >

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">

                                <span>
                                    Как это работает
                                </span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    <li>
                                        <strong>Регистрация:</strong> присоединяйтесь к сети читателей, которые любят чтение и устойчивое развитие. Подключайтесь и открывайте для себя новые книги, рекомендованные другими участниками.
                                    </li>
                                    <li><strong>Составьте список своих книг:</strong> нашей платформой легко пользоваться, легко размещать свои книги и находить новые книги.</li>
                                    <li><strong>Просмотр списков:</strong> поделитесь радостью чтения с друзьями и близкими...</li>
                                    <li><strong> Свяжитесь с нами: </strong> что каждая книга заслуживает того, чтобы ее читали и наслаждались ею снова и снова. Связывая новых читателей с теми, кому книги больше не нужны, это приносит пользу окружающей среде и любителям книг. Мы создаем ситуацию</li>
                                    <li><strong>Обмен:</strong>Согласовать детали продажи, подарка или обмена.
                                    </li>
                                    <li><strong>Наслаждайтесь чтением: </strong> откройте для себя новые книги и погрузитесь в новое приключение чтения</li>
                                </ul>
                            </div>
                        </details >

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">

                                <span>
                                    Наша команда
                                </span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    <li>
                                        <strong>Мы, Китабу, — не просто платформа,</strong> а сообщество любителей книг, приверженных устойчивому образу жизни. Присоединившись к Китобу, вы станете частью более широкого движения за сокращение отходов и продвижение культуры повторного использования. Мы регулярно проводим мероприятия, книжные акции и конкурсы по чтению.
                                    </li>

                                </ul>
                            </div>
                        </details >

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">

                                <span>
                                    Присоединиться
                                </span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    <li>
                                        <strong>Волонтер:</strong>  помогите организовать мероприятия, управлять нашим присутствием в Интернете или помочь с логистикой.
                                    </li>
                                    <li><strong>Пожертвовать:</strong> нашей платформой легко пользоваться, легко размещать свои книги и находить новые книги.</li>
                                    <li><strong>Поделиться:</strong> поделитесь нашей платформой со своими друзьями, семьей и в социальных сетях. Чем больше людей присоединится, тем больше книг мы сможем хранить и делиться ими</li>

                                </ul>
                            </div>
                        </details >


                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">

                                <span>
                                    Свазь
                                </span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    <li>
                                        <strong>Если у вас есть какие-либо вопросы,</strong>  предложения или вам нужна помощь, свяжитесь с нашей службой поддержки на [Book.com] или посетите [нашу страницу контактов]. Мы всегда готовы помочь и рады услышать от нашей команды, что нас больше нет.
                                    </li>

                                </ul>
                            </div>
                        </details >

                        <details className="group mt-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">

                                <span>
                                    Следуй за нами
                                </span>
                                <svg className="w-5 h-5 transition-transform duration-300 group-open:-rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <div className="px-6 pb-6">
                                <ul className=" space-y-3">
                                    <li>
                                        Подпишитесь на нас в социальных сетях, чтобы быть в курсе наших последних новостей, событий и списков книг
                                    </li>
                                    <li>
                                        <strong>Телеграмма:</strong>  <a href="">books.com</a></li>
                                    <li>
                                        <strong>Веб-сайт:</strong>  <a href="">books.com</a></li>
                                    <li>
                                        Спасибо за то, что вы являетесь частью Китабу. Давайте сделаем будущее устойчивым и вдохновляющим с помощью книг</li>


                                </ul>
                            </div>
                        </details >
                    </div>
                </div>
            </section>

        </>
    )
}
