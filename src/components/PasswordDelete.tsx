import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../lib/api';

export default function PasswordDelete() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');
        setLoading(true);
        const fullPhone = `+998${phone}`;
        try {
            await api.forgotPassword(fullPhone);
            // передаём номер на следующую страницу, чтобы не спрашивать его снова
            navigate('/confirm-code', { state: { phone: fullPhone } });
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
                                <h1 className=' mb-3.25 text-center text-[#171718] text-[34px]  font-bold '>Восстановление <br /> пароля </h1>
                                <p className='mb-7.5 text-[#525458] text-center   font-medium '>Мы отправим вам SMS для <br /> сброса пароля</p>
                            </div>
                            <form onSubmit={handleSubmit} className='flex flex-col max-w-sm gap-2.5'>
                                {error && <p className='text-red-500 text-sm text-center'>{error}</p>}
                                <label className='flex flex-col gap-2'>
                                    Ваш номер телефона:
                                    <div className='flex  mb-9 items-center   rounded-[14px] border bg-white border-[#d6dbe1]'>
                                        <strong className='pl-3  text-[#db5300]'>+998</strong>
                                        <input
                                            className='w-full mt-2 min-w-72 p-1    outline-none mb-1.75'
                                            type="tel" maxLength={9} pattern="^\d{9}$" required
                                            value={phone} onChange={(e) => setPhone(e.target.value)}
                                        ></input>
                                    </div>
                                </label>

                                <button disabled={loading} className='w-full mb-2 max-w-85  p-3.25 rounded-[14px] bg-[#db5300] text-white   font-semibold disabled:opacity-60'>
                                    {loading ? 'Отправляем...' : 'Продольжить'}
                                </button>
                                <Link className='w-full border border-[#db5300] hover:bg-[#db5300] active:bg-[#963800] hover:text-[#ffffff] transition-colors duration-500 text-center max-w-85   p-3.25 rounded-[14px] bg-[#ffffff]  text-[#db5300]   font-semibold ' to="/login">Назад</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}