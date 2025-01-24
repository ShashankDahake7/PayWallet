import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Balance from '../components/Balance';

export default function Dashboard() {
    const token = localStorage.getItem("token");
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate("/signin");
        }
    }, [token]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-12 space-y-6">
                <Suspense fallback={<div className="h-24 bg-white animate-pulse rounded-lg"></div>}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white shadow-lg rounded-lg p-6"
                    >
                        <Balance />
                    </motion.div>
                </Suspense>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <Outlet />
                </motion.div>
            </main>
        </div>
    )
}