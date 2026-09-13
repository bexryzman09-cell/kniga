import { Link } from 'react-router-dom';

export default function AboutInfo() {
    return (
        <>
            <section>
                <div className='max-w-327.75 w-full  px-15      '>
                    <div className='flex items-center justify-between gap-20'>
                        <div className='flex flex-col gap-12 py-10' >
                            <div>
                                <Link className='flex pb-10 gap-3 items-center' to="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>arrow-align-left</title><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="20" d="M3 3v18"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="20;0" /></path><path stroke-dasharray="16" stroke-dashoffset="16" d="M21 12h-13.5"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" to="0" /></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M7 12l4 4M7 12l4 -4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" to="0" /></path></g></svg>
                                    Назад
                                </Link>
                                <h1 className="text-[34px] hover:text-orange-500 font-bold leading-[47.6px] text-left text-[#171718] transition-colors duration-500 ease-linear">о нас</h1>
                                <p className="mt-7.5 max-w-145 text-base font-medium text-left text-[#525458]">Добро пожаловать на сайт Books.com! Благодаря платформе Books.com он не только облегчает обмен книгами, но и объединяет сообщество читателей. Пользователи делятся своими знаниями и опытом с другими посредством книг, находят новое книги и зимой они еще больше разовьют свой интерес. Здесь можно найти книги любого жанра и установить взаимовыгодные отношения»</p>

                            </div>
                            <div>
                                <h1 className="text-[34px] hover:text-orange-500 font-bold leading-[47.6px] text-left text-[#171718] transition-colors duration-500 ease-linear">Наша коллекция</h1>
                                <p className="mt-7.5 max-w-145 text-base font-medium text-left text-[#525458]">«Коллекция Books.com – это собрание уникальных книг различных жанров и направлений. Здесь каждый читатель может найти книгу, соответствующую его интересам. Классические произведения, научные и художественные книги, редкая литература – ​​все собрано в одном месте. наша цель — помочь каждой книге найти своего читателя и предоставить широкий выбор книголюбам»</p>
                            </div>
                            <div>
                                <h1 className="text-[34px] hover:text-orange-500 font-bold leading-[47.6px] text-left text-[#171718] transition-colors duration-500 ease-linear">Наши обязательства</h1>
                                <p className="mt-7.5 max-w-145 text-base font-medium text-left text-[#525458]">Наше обязательство перед сообществом Books.com – создать удобную, надежную и безопасную платформу для каждого пользователя. Мы стремимся облегчить процесс продажи, дарения или обмена книгами, а также обеспечить, чтобы пользователи относились друг к другу с уважением. Также книги Мы стремимся создать условия для повышения их ценности и привлечения к ним новых студентов</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div>
                                <h1 className="text-[34px] hover:text-orange-500 font-bold leading-[47.6px] text-left text-[#171718] transition-colors duration-500 ease-linear">Наша цель</h1>
                                <p className="mt-7.5 max-w-145 text-base font-medium text-left text-[#525458]">Цель платформы Books.com — продлить жизнь книг и стимулировать обмен знаниями, предоставляя возможность продавать, дарить и обменивать старые книги. Мы стремимся донести до новых читателей ценность количество книг будет увеличиваться, и они будут способствовать постоянному распространению новых знаний и идей.</p>
                            </div>
                            <div>
                                <h1 className="text-[34px] hover:text-orange-500 font-bold leading-[47.6px] text-left text-[#171718] transition-colors duration-500 ease-linear">Наше сообщество</h1>
                                <p className="mt-7.5 max-w-145 text-base font-medium text-left text-[#525458]">«Сообщество Books.com – это союз людей, любящих знания и книги. Мы – сообщество, основанное на принципах взаимного уважения, обмена знаниями и поддержки. Здесь каждый читатель делится своим опытом с другими, новый мир. найдет книги и погрузиться глубоко в мир знаний. Наше общество, созданное для любителей книг и людей, жаждущих знаний, открыто для всех и всегда полно новых возможностей».</p>
                            </div>
                        </div>
                    </div>
                  <div className='flex justify-center p-25'>
                      <div className='flex items-center   border border-solid border-[#eeeeee] rounded-[14px] max-w-229.5 p-10'>
                        <div>
                            <h1 className='text-[34px] font-bold leading-[47.6px] text-left text-[#171718]'>Вопросы и ответы</h1>
                            <p>Вы можете получить ответы на свои вопросы</p>
                            <Link className='flex items-center justify-center cursor-pointer mt-10 max-w-65 w-full h-12 border-0 bg-[#db5300] rounded-[14px] text-base font-semibold leading-[22.4px] text-white' to="/questionmark">Вопросы и ответы</Link>
                        </div>
                        <img className='ml-20' src="/questionmark.png" alt="questionmark" />
                    </div>
                  </div>
                </div>
            </section>
        </>
    )
}
