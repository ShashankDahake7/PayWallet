import React from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../components/InputBox';
import { useRecoilState } from 'recoil';
import { signUpAtom } from '../store/atoms/user';
import { useAuth } from '../hooks/Auth';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

export default function Signup() {
    const [data, setData] = useRecoilState(signUpAtom);
    const handleData = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSignUp = useAuth("signup", { data });

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center p-4'>
            <motion.section 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className='w-full max-w-md bg-zinc-800 rounded-2xl shadow-2xl overflow-hidden'
            >
                <div className='p-8 space-y-6'>
                    <div className='text-center'>
                        <motion.h2 
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className='text-4xl font-bold text-white mb-2'
                        >
                            Create Account
                        </motion.h2>
                        <p className='text-zinc-400 text-sm'>Enter your information to get started</p>
                    </div>

                    <div className='space-y-4'>
                        <div className='grid grid-cols-2 gap-4'>
                            <motion.div 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <InputBox 
                                    icon={<FaUser className='text-zinc-400' />}
                                    onChange={handleData} 
                                    value={data.firstName} 
                                    placeholder='First Name' 
                                    label="First Name" 
                                    name="firstName" 
                                />
                            </motion.div>
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <InputBox 
                                    icon={<FaUser className='text-zinc-400' />}
                                    onChange={handleData} 
                                    value={data.lastName} 
                                    placeholder='Last Name' 
                                    label="Last Name" 
                                    name="lastName" 
                                />
                            </motion.div>
                        </div>

                        <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <InputBox 
                                icon={<FaEnvelope className='text-zinc-400' />}
                                onChange={handleData} 
                                value={data.username} 
                                placeholder='johndoe@gmail.com' 
                                label="Email" 
                                name="username" 
                                type="email"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <InputBox 
                                icon={<FaLock className='text-zinc-400' />}
                                onChange={handleData} 
                                value={data.password} 
                                placeholder='Password' 
                                label="Password" 
                                name="password" 
                                type="password"
                            />
                        </motion.div>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSignUp} 
                        className='w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out font-semibold'
                    >
                        Sign Up
                    </motion.button>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className='text-center text-zinc-400'
                    >
                        Already have an account? {' '}
                        <Link 
                            to="/signin" 
                            className='text-indigo-400 hover:text-indigo-300 transition-colors'
                        >
                            Login
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}