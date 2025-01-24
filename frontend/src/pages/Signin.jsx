import React from 'react';
import { Link } from 'react-router-dom';
import InputBox from '../components/InputBox';
import { useRecoilState } from 'recoil';
import { signInAtom } from '../store/atoms/user';
import { useAuth } from '../hooks/Auth';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function Signin() {
    const [data, setData] = useRecoilState(signInAtom);
    const handleData = (e) => {
        setData({...data, [e.target.name]: e.target.value });
    };
    const handleSignIn = useAuth("signin", { data });

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
                            Welcome Back
                        </motion.h2>
                        <p className='text-zinc-400 text-sm'>Enter your credentials to access your account</p>
                    </div>

                    <div className='space-y-4'>
                        <motion.div 
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
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
                            transition={{ delay: 0.4 }}
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

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className='text-right'
                        >
                            <a href="#" className='text-zinc-400 hover:text-indigo-400 text-sm transition-colors'>
                                Forgot Password?
                            </a>
                        </motion.div>
                    </div>

                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSignIn} 
                        className='w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 ease-in-out font-semibold'
                    >
                        Sign In
                    </motion.button>

                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className='text-center text-zinc-400'
                    >
                        Don't have an account? {' '}
                        <Link 
                            to="/signup" 
                            className='text-indigo-400 hover:text-indigo-300 transition-colors'
                        >
                            Sign Up
                        </Link>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    )
}