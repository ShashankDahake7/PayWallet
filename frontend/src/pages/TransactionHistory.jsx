import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { motion } from 'framer-motion';

export default function TransactionHistory() {
    const [data, setData] = useState([]);
    const [firstname, setFirstName] = useState("");
    
    async function handleData() {
        const res = await axios.get("http://localhost:4000/api/v1/account/history", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        });
        setFirstName(res.data.user)
        setData(res.data.history);
    }
    
    useEffect(() => {
        handleData();
    }, []);

    return (
        <div className='w-full py-8 bg-zinc-900'>
            <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-3xl font-bold text-white mb-8 tracking-tight'
                >
                    Transaction History
                </motion.h2>
                
                {/* Header Row */}
                <div className='grid grid-cols-12 gap-4 p-4 bg-zinc-800 rounded-t-lg text-gray-300 font-semibold'>
                    <div className='col-span-1 text-center'>No.</div>
                    <div className='col-span-4'>Sender</div>
                    <div className='col-span-4'>Receiver</div>
                    <div className='col-span-3 text-right'>Amount</div>
                </div>

                {/* Transaction Rows */}
                {data.length > 0 ? (
                    <div className='divide-y divide-zinc-700'>
                        {data.map((user, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                    duration: 0.3, 
                                    delay: i * 0.1 
                                }}
                                className='grid grid-cols-12 gap-4 p-4 bg-zinc-800 hover:bg-zinc-700 transition-colors'
                            >
                                <div className='col-span-1 text-center text-gray-400'>{i + 1}</div>
                                <div className='col-span-4 text-white'>{user.senderFirstName} {user.senderLastName}</div>
                                <div className='col-span-4 text-white'>{user.receiverFirstName} {user.receiverLastName}</div>
                                <div className={`col-span-3 text-right font-semibold ${
                                    firstname === user.senderFirstName 
                                        ? 'text-red-500' 
                                        : 'text-green-500'
                                }`}>
                                    {firstname === user.senderFirstName ? '-' : '+'}{user.amount}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className='text-center py-12 bg-zinc-800 rounded-b-lg'>
                        <p className='text-gray-500'>No transactions found</p>
                    </div>
                )}
            </div>
        </div>
    )
}