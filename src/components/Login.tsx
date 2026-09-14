import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../lib/api';

export default function Login() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await api.login(phone, password);
            navigate('/'); // успех - можно поменять на нужную страницу после входа
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
                                <Link className='max-w-45 w-full p-3.25 rounded-[14px] bg-white text-[#525458]   font-semibold  text-center' to="/register">Register</Link>
                                <Link className='max-w-45 w-full p-3.25 rounded-[14px] bg-[#db5300] text-white   font-semibold   text-center' to="/login">Login</Link>
                            </div>
                            <div className='flex flex-col'>
                                <h1 className=' mb-3.25 text-center text-[#171718] text-[34px]  font-bold '>Входить</h1>
                                <p className='mb-7.5 text-[#525458] text-center   font-medium '>Введите свои данные для <br /> входа</p>
                            </div>
                            <form onSubmit={handleSubmit} className='flex flex-col max-w-sm gap-2.5'>
                                {error && <p className='text-red-500 text-sm text-center'>{error}</p>}
                                <label className='flex flex-col gap-2'>
                                    Ваш номер телефона:
                                    <input
                                        className='w-full max-w-85 p-3 rounded-[14px] border border-[#d6dbe1] bg-white outline-none mb-1.75'
                                        type="tel" maxLength={13} pattern="^\+998\d{9}$" placeholder="+998XXXXXXXXX" required
                                        value={phone} onChange={(e) => setPhone(e.target.value)}
                                    ></input>
                                </label>
                                <label className='flex flex-col gap-2'    >
                                    Пароль:
                                    <input
                                        className='w-full min-w-85 p-3 rounded-[14px] border border-[#d6dbe1] bg-white outline-none mb-1.75'
                                        placeholder='пароль' required type="password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                </label>
                                <Link className='mt-1.25 text-right text-[#db5300] text-sm  font-medium  ' to="/confirm-password">Забыли пароль?</Link>
                                <button disabled={loading} className='w-full max-w-85  p-3.25 rounded-[14px] bg-[#db5300] text-white   font-semibold disabled:opacity-60'>
                                    {loading ? 'Входим...' : 'Продольжить'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}