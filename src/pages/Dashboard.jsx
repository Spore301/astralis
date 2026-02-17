import React from 'react';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
    const { user, logout } = useUser();

    return (
        <div className="min-h-screen bg-[#FFF5C3] p-6">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8 border-b-4 border-[#1a1a2e] pb-4">
                    <h1 className="font-retro-west text-4xl text-[#1a1a2e]">DASHBOARD</h1>
                    <div className="flex items-center gap-4">
                        <span className="font-body font-bold">Welcome, {user?.name || 'User'}</span>
                        <button onClick={logout} className="bg-[#1a1a2e] text-white px-4 py-2 font-bold text-sm border-2 border-transparent hover:bg-[#E91E63]">
                            LOGOUT
                        </button>
                    </div>
                </div>

                <div className="bg-white border-4 border-[#1a1a2e] box-shadow-hard p-8">
                    <h2 className="font-hindi-hero text-3xl text-[#E91E63] mb-4">Your Reports</h2>
                    <div className="p-12 text-center border-2 border-dashed border-gray-300 text-gray-400">
                        No reports generated yet.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
