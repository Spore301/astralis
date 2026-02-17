import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useOrder } from '../context/OrderContext';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { verifyMagicLink } = useUser();
    const { orderData } = useOrder();
    const [status, setStatus] = useState('Verifying...');

    useEffect(() => {
        const verify = async () => {
            const token = searchParams.get('token');
            const email = searchParams.get('email');

            if (!token || !email) {
                setStatus('Invalid link');
                return;
            }

            const result = await verifyMagicLink(token, email);
            if (result.success) {
                setStatus('Verified! Redirecting...');
                setTimeout(() => {
                    if (orderData) {
                        navigate('/payment');
                    } else {
                        navigate('/dashboard');
                    }
                }, 1500);
            } else {
                setStatus('Verification failed. Link may be expired.');
            }
        };

        verify();
    }, [searchParams, verifyMagicLink, navigate, orderData]);

    return (
        <div className="min-h-screen bg-[#FFF5C3] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white border-4 border-[#1a1a2e] box-shadow-hard p-8 text-center">
                <h2 className="font-retro-west text-2xl text-[#1a1a2e] mb-4">MAGIC LINK</h2>
                <p className="font-body text-xl font-bold">{status}</p>
            </div>
        </div>
    );
};

export default Verify;
