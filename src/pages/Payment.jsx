import React from 'react';
import { useUser } from '../context/UserContext';
import { useOrder } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    const { user } = useUser();
    const { orderData } = useOrder();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#FFF5C3] flex items-center justify-center p-4">
            <div className="max-w-lg w-full bg-white border-4 border-[#1a1a2e] box-shadow-hard p-8 text-center">
                <h2 className="font-retro-west text-3xl mb-4 text-[#1a1a2e]">PAYMENT GATEWAY</h2>
                <p className="mb-4 font-body">Simulating Stripe Integration...</p>

                <div className="bg-gray-100 p-4 mb-4 border-2 border-dashed border-[#1a1a2e] text-left">
                    <h3 className="font-bold mb-2">Order Summary:</h3>
                    {orderData && (
                        <ul className="text-sm space-y-1">
                            <li><strong>Name:</strong> {orderData.name}</li>
                            <li><strong>Date:</strong> {orderData.date}</li>
                            <li><strong>Time:</strong> {orderData.time}</li>
                            <li><strong>Place:</strong> {orderData.place}</li>
                        </ul>
                    )}
                    <div className="mt-4 pt-4 border-t border-gray-300 font-bold text-xl text-right">
                        Total: ₹999
                    </div>
                </div>

                <button className="w-full bg-[#009688] text-white font-black uppercase py-4 border-2 border-[#1a1a2e] hover:bg-[#00796B] transition-colors shadow-lg">
                    PAY NOW
                </button>

                <button onClick={() => navigate('/dashboard')} className="mt-4 underline text-sm">Skip to Dashboard (Dev)</button>
            </div>
        </div>
    );
};

export default Payment;
