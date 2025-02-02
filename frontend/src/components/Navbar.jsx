import React from 'react'
import { useRecoilValue } from 'recoil'
import { balanceAtom } from '../store/atoms/user'
import { useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
    const { user } = useRecoilValue(balanceAtom);
    const navigate = useNavigate();
    return (
        <nav className="w-full bg-white shadow-md border-b border-blue-100">
            <div className="container mx-auto px-6 py-4 flex flex-row justify-between items-center">
                <div>
                    <Link to="/dashboard" className="text-2xl font-bold text-blue-600">
                        PayWallet
                    </Link>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <button 
                        onClick={() => navigate("history")} 
                        className="text-blue-600 hover:bg-blue-50 rounded-md px-3 py-1 transition"
                    >
                        History
                    </button>
                    <button 
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/signin")
                        }} 
                        className="text-blue-600 hover:bg-blue-50 rounded-md px-3 py-1 transition"
                    >
                        Log Out
                    </button>
                    {/* <div className="text-blue-800 mr-2">
                        Hello, {user.firstName}
                    </div>
                    <div className="h-9 w-9 bg-blue-600 text-white flex justify-center items-center rounded-full">
                        <span className="font-bold text-lg">{user.firstName[0].toUpperCase()}</span>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}