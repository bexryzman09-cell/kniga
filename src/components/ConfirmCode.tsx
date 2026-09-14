import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { api } from '../lib/api';

export default function ConfirmCode() {
    const navigate = useNavigate();
    const location = useLocation();
    // номер передан со страницы PasswordDelete через navigate(..., { state })
    const phone = (location.state as { phone?: string })?.phone || '';

    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');

        if (!phone) {
            setError('Номер телефона потерян, начните восстановление заново');
            return;
        }

        setLoading(true);
        try {
            await api.confirmResetCode(phone, code);
            navigate('/security'); // теперь можно поставить новый пароль
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
                            <div className='flex flex-col'>
                                <h1 className='mb-3.25 text-center text-[#171718] text-[34px] font-bold'>Введите код</h1>
                                <p className='mb-7.5 text-[#525458] text-center font-medium'>
                                    Мы отправили код на <br /> {phone || 'ваш номер'}
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className='flex flex-col max-w-sm gap-2.5'>
                                {error && <p className='text-red-500 text-sm text-center'>{error}</p>}
                                <label className='flex flex-col gap-2'>
                                    Код из SMS:
                                    <input
                                        className='w-full min-w-85 p-3 rounded-[14px] border border-[#d6dbe1] bg-white outline-none mb-1.75 text-center tracking-[8px]'
                                        type="text" inputMode="numeric" maxLength={6} pattern="^\d{6}$" placeholder="------" required
                                        value={code} onChange={(e) => setCode(e.target.value)}
                                    ></input>
                                </label>

                                <button disabled={loading} className='w-full max-w-85 p-3.25 rounded-[14px] bg-[#db5300] text-white font-semibold disabled:opacity-60'>
                                    {loading ? 'Проверяем...' : 'Продольжить'}
                                </button>
                                <Link className='w-full border border-[#db5300] hover:bg-[#db5300] active:bg-[#963800] hover:text-[#ffffff] transition-colors duration-500 text-center max-w-85 p-3.25 rounded-[14px] bg-[#ffffff] text-[#db5300] font-semibold' to="/login">Назад</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}