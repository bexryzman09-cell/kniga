import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../lib/api';

export default function Register() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [agree, setAgree] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await api.register(firstName, lastName, phone);
            navigate('/security'); // здесь пользователь ставит пароль в первый раз
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <section>
                <div className='flex justify-center items-center'>
                    <div className='flex w-full  justify-center pt-27.5 pb-25'>
                        <img className='rounded-bl-2xl  rounded-l-2xl' width={610} src="registerimage.png" alt="" />
                        <div className='pt-15 p-30 rounded-b-2xl rounded-tr-2xl  pb-38.5 shadow-[0_5px_20px_0_rgba(214,219,225,0.4)]'>
                            <div className='max-w-91.5 w-full mb-10 flex  justify-between items-center rounded-[14px] border border-[#eeeeee] '>
                                <Link className='max-w-45 w-full p-3.25 rounded-[14px] bg-[#db5300] text-white    font-semibold  text-center' to="/register">Register</Link>
                                <Link className='max-w-45 w-full p-3.25 rounded-[14px]  bg-white text-[#525458]  font-semibold   text-center' to="/login">Login</Link>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className=' mb-3.25 text-center text-[#171718] text-[34px]  font-bold '>Добро пожаловать!</h1>
                                <p className='mb-7.5 text-[#525458] text-center   font-medium '>Введите свои данные для  <br />   регистрации</p>
                            </div>
                            <form onSubmit={handleSubmit} className='flex flex-col max-w-sm gap-2.5'>
                                {error && <p className='text-red-500 text-sm text-center'>{error}</p>}
                                <label className='flex flex-col gap-2'>
                                    Введите ваше имя:
                                    <input
                                        className='w-full min-w-85 p-3 rounded-[14px] border border-[#d6dbe1] bg-white outline-none mb-1.75'
                                        type="text" placeholder=" Введите ваше имя:" required
                                        value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                    ></input>
                                </label>
                                <label className='flex flex-col gap-2'>
                                    Введите свою фамилию:
                                    <input
                                        className='w-full min-w-85 p-3 rounded-[14px] border border-[#d6dbe1] bg-white outline-none mb-1.75'
                                        type="text" placeholder=" Введите свою фамилию:" required
                                        value={lastName} onChange={(e) => setLastName(e.target.value)}
                                    ></input>
                                </label>
                                <label className='flex flex-col gap-2'>
                                    Ваш номер телефона:
                                    <input
                                        className='w-full min-w-85 p-3 rounded-[14px] border border-[#d6dbe1] bg-white outline-none mb-1.75'
                                        type="tel" maxLength={13} pattern="^\+998\d{9}$" placeholder="+998XXXXXXXXX" required
                                        value={phone} onChange={(e) => setPhone(e.target.value)}
                                    ></input>
                                </label>
                                <label className='flex gap-1.75 items-center'>
                                    <input type="checkbox" required checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                                    Я принимаю <a className='text-[#db5300] text-sm  font-medium  ' href="/register">Открыть предложение</a>
                                </label>

                                <button disabled={loading} className='w-full cursor-pointer max-w-85  p-3.25 rounded-[14px] bg-[#db5300] text-white   font-semibold disabled:opacity-60'>
                                    {loading ? 'Регистрируем...' : 'Продольжить'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}