import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Signup = () => {
    const navigate = useNavigate();
    const { sendMagicLink } = useUser();
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await sendMagicLink(email);
        if (result.success) {
            setSent(true);
        } else {
            alert('Failed to send magic link');
        }
    };

    if (sent) {
        return (
            <div className="min-h-screen bg-[#E91E63] flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-[#FFF5C3] border-4 border-[#1a1a2e] box-shadow-hard p-8 text-center">
                    <h2 className="font-retro-west text-2xl text-[#1a1a2e] mb-4">CHECK YOUR INBOX</h2>
                    <p className="font-body text-lg mb-4">We sent a magic link to <strong>{email}</strong>.</p>
                    <p className="text-sm text-gray-600">(Since this is a demo, check the browser console for the link)</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#E91E63] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-[#FFF5C3] border-4 border-[#1a1a2e] box-shadow-hard p-8">
                <h2 className="font-retro-west text-3xl text-center mb-6 text-[#1a1a2e]">JOIN THE CULT</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-body font-black uppercase text-sm mb-1">Email</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border-2 border-[#1a1a2e] p-2 font-body font-bold focus:outline-none focus:border-[#E91E63]"
                        />
                    </div>

                    <button type="submit" className="w-full bg-[#1a1a2e] text-white font-black uppercase py-3 border-2 border-transparent hover:bg-[#009688] hover:text-[#FFF5C3] transition-colors mt-6">
                        Join with Email
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <button onClick={() => navigate('/login')} className="font-body font-bold underline hover:text-[#E91E63]">Already have an account? Login</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
