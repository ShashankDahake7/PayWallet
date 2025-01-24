import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { amountAtom } from '../store/atoms/user';
import useTransfer from '../hooks/Transfer';
import { motion } from 'framer-motion';
import { IoArrowBack } from "react-icons/io5";
import { FaMoneyBillWave } from 'react-icons/fa';
import InputBox from '../components/InputBox';

export default function Send() {
    const [amount, setAmount] = useRecoilState(amountAtom);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const handleTransfer = useTransfer({ amount, id });

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center p-4'>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='absolute top-4 left-4'
            >
                <Link 
                    to="/dashboard" 
                    className='text-white p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors'
                >
                    <IoArrowBack className='text-2xl' />
                </Link>
            </motion.div>

            <motion.section 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='w-full max-w-md bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden'
            >
                <div className='p-8 space-y-6'>
                    <div className='text-center'>
                        <h2 className='text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3'>
                            <FaMoneyBillWave className='text-green-500' />
                            Send Money
                        </h2>
                        <p className='text-zinc-400 text-sm'>Transfer funds to {name}</p>
                    </div>

                    <div className='flex items-center justify-center gap-4 mb-6'>
                        <div className='h-16 w-16 bg-indigo-600 flex justify-center items-center rounded-full shadow-lg'>
                            <span className='text-3xl text-white font-bold'>{name[0].toUpperCase()}</span>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-white'>{name}</h3>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <InputBox 
                            icon={<FaMoneyBillWave className='text-zinc-400' />}
                            onChange={(e) => setAmount(e.target.value)} 
                            placeholder='Enter amount' 
                            label="Amount (in Rs)" 
                            type="number"
                        />

                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleTransfer}
                            className='w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out font-semibold'
                        >
                            Send Money
                        </motion.button>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}