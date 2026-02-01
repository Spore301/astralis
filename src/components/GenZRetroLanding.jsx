import React, { useEffect, useState } from 'react';
import { Star, Heart, Sun, ArrowRight, Sparkles, Zap, Ticket, Smartphone } from 'lucide-react';

const GenZRetroLanding = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-[#FFF5C3] text-[#1a1a2e] font-sans overflow-x-hidden relative selection:bg-[#E91E63] selection:text-[#FFF5C3]">
            {/* TEXTURE OVERLAY */}
            <div className="texture-grunge"></div>

            {/* --- NAVIGATION: THE HEADER --- */}
            <nav className={`fixed w-full z-50 transition-all duration-300 border-b-4 border-[#1a1a2e] ${scrolled ? 'bg-[#FFF5C3] py-2' : 'bg-[#FFF5C3] py-4'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#E91E63] text-white p-2 border-2 border-[#1a1a2e] transform -rotate-3">
                            <Sparkles size={24} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-retro-west text-2xl text-[#1a1a2e] leading-none mt-1">ASTRALIS</span>
                            <span className="font-body text-[10px] font-black uppercase tracking-widest text-[#E91E63]">Vedic Tech for Gen Z</span>
                        </div>
                    </div>

                    <div className="hidden md:flex gap-6 font-body font-black uppercase tracking-wider text-sm">
                        <button className="px-4 py-2 hover:bg-[#1a1a2e] hover:text-[#FFC107] transition-colors border-2 border-transparent">Your Vibe</button>
                        <button className="px-4 py-2 hover:bg-[#1a1a2e] hover:text-[#FFC107] transition-colors border-2 border-transparent">Love Sync</button>
                        <button className="bg-[#009688] text-white px-6 py-2 border-2 border-[#1a1a2e] box-shadow-hard hover:bg-[#00796B] transition-all">
                            Get Access
                        </button>
                    </div>
                </div>
            </nav>

            {/* --- MARQUEE STRIP --- */}
            <div className="bg-[#1a1a2e] text-[#FFC107] py-3 mt-[80px] border-b-4 border-[#E91E63] sticky top-[76px] z-40 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap font-body font-black uppercase tracking-[0.2em] text-sm">
                    <span className="mx-8">★ NO CAP PREDICTIONS ★</span>
                    <span className="mx-8 text-white">100% VEDIC FACTS</span>
                    <span className="mx-8">★ DECODE YOUR CHAOS ★</span>
                    <span className="mx-8 text-white">PLANETARY VIBE CHECK</span>
                    <span className="mx-8">★ NO CAP PREDICTIONS ★</span>
                    <span className="mx-8 text-white">100% VEDIC FACTS</span>
                    <span className="mx-8">★ DECODE YOUR CHAOS ★</span>
                    <span className="mx-8 text-white">PLANETARY VIBE CHECK</span>
                </div>
            </div>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-16 pb-24 px-4 bg-[#FFF5C3] overflow-hidden">
                {/* Background Sunburst */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] bg-[radial-gradient(circle,#FFC107_10%,transparent_10%),radial-gradient(circle,#FFC107_20%,transparent_20%)] opacity-20 animate-pulse pointer-events-none z-0"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                    {/* LEFT: TEXT CONTENT */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                        {/* Stamp */}
                        <div className="border-4 border-[#1a1a2e] rounded-full w-24 h-24 flex items-center justify-center bg-[#009688] text-white font-body font-black text-xs uppercase leading-tight transform -rotate-12 mb-8 shadow-lg">
                            Verified<br />Cosmic<br />Data
                        </div>

                        {/* THE HINDI HERO TITLE */}
                        <h1 className="flex flex-col items-center lg:items-start leading-[0.8] mb-6 transform -rotate-2 origin-bottom-left">
                            <span className="font-hindi-hero text-[8rem] sm:text-[10rem] md:text-[12rem] text-3d-retro">
                                किस्मत
                            </span>
                            <span className="font-retro-west text-[4rem] sm:text-[5rem] md:text-[6rem] text-[#1a1a2e] mt-2 drop-shadow-[4px_4px_0px_#FFF5C3] filter drop-shadow-[8px_8px_0px_#1a1a2e]">
                                <span className="text-[#E91E63] font-serif italic">&</span> Karma
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <h2 className="font-retro-west text-xl md:text-2xl text-[#1a1a2e] bg-[#FFC107] px-4 py-1 border-4 border-[#1a1a2e] box-shadow-hard transform rotate-1 mb-8 inline-block">
                            DECODE THE DRAMA
                        </h2>

                        <p className="font-body text-xl font-bold text-[#1a1a2e]/80 max-w-lg mb-10 leading-snug">
                            <span className="text-[#E91E63]">Stop doom-scrolling your destiny.</span> Get the raw, unfiltered data on your life, love, and career.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
                            <button className="bg-[#E91E63] text-white px-8 py-4 font-body font-black uppercase tracking-widest text-lg border-4 border-[#1a1a2e] box-shadow-hard flex items-center justify-center gap-3 group">
                                <Sun className="group-hover:rotate-180 transition-transform" />
                                Reveal The Tea
                            </button>
                            <button className="bg-white text-[#1a1a2e] px-8 py-4 font-body font-black uppercase tracking-widest text-lg border-4 border-[#1a1a2e] box-shadow-hard flex items-center justify-center gap-3 hover:bg-[#FFC107] transition-colors">
                                Check Compatibility
                            </button>
                        </div>
                    </div>

                    {/* RIGHT: THE HERO IMAGE FRAME */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                        <div className="relative w-full aspect-[3/4] bg-[#1a1a2e] p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-[15px_15px_0px_0px_#E91E63]">
                            {/* Corner Stars */}
                            <div className="absolute -top-6 -left-6 text-[#FFC107] z-20"><Star size={48} fill="currentColor" strokeWidth={2} stroke="#1a1a2e" /></div>
                            <div className="absolute -bottom-6 -right-6 text-[#FFC107] z-20"><Star size={48} fill="currentColor" strokeWidth={2} stroke="#1a1a2e" /></div>

                            <div className="w-full h-full border-4 border-[#FFF5C3] overflow-hidden relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1582233479366-6d38bc390a08?q=80&w=2083&auto=format&fit=crop"
                                    className="w-full h-full object-cover grayscale contrast-125 sepia group-hover:scale-110 transition-transform duration-700"
                                    alt="Retro Couple"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#E91E63]/80 via-transparent to-[#1a1a2e]/40 mix-blend-multiply"></div>

                                {/* Text on Image */}
                                <div className="absolute bottom-6 left-0 w-full text-center">
                                    <span className="font-hindi-hero text-5xl text-[#FFC107] drop-shadow-[2px_2px_0px_#000]">असली Vibe</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DIVIDER --- */}
            <div className="bg-[#E91E63] py-4 border-y-4 border-[#1a1a2e] flex justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
                <span className="font-retro-west text-[#FFC107] text-3xl tracking-widest drop-shadow-[2px_2px_0px_#000]">
                    ★ REALITY CHECK ★
                </span>
            </div>

            {/* --- REPORTS DISPLAY --- */}
            <section className="py-24 px-6 bg-[#009688]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-retro-west text-5xl text-[#FFF5C3] drop-shadow-[4px_4px_0px_#1a1a2e] mb-4">CHOOSE YOUR ERA</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                        {/* LIFE REPORT CARD */}
                        <div className="bg-[#FFF5C3] p-6 border-4 border-[#1a1a2e] box-shadow-hard group cursor-pointer">
                            <div className="border-4 border-double border-[#1a1a2e] p-6 h-full flex flex-col items-center text-center relative">
                                <div className="absolute top-0 left-0 bg-[#E91E63] text-white px-3 py-1 font-body font-black uppercase text-xs border-r-4 border-b-4 border-[#1a1a2e]">Trending</div>

                                <div className="bg-[#FFC107] p-4 rounded-full border-4 border-[#1a1a2e] mb-6 group-hover:scale-110 transition-transform">
                                    <Sun size={40} className="text-[#1a1a2e]" />
                                </div>

                                <h3 className="font-hindi-hero text-5xl text-[#E91E63] mb-2">जन्म कुंडली</h3>
                                <h4 className="font-retro-west text-xl text-[#1a1a2e] mb-6">THE LIFE AUDIT</h4>

                                <p className="font-body font-bold text-[#1a1a2e]/70 mb-8 text-lg">
                                    Career pivots, mental health, and why you are the way you are. The full documentation of your main character energy.
                                </p>

                                <button className="w-full bg-[#1a1a2e] text-white font-black py-3 border-2 border-transparent uppercase hover:bg-[#E91E63] hover:text-[#FFF5C3] transition-colors">
                                    Get Exposed
                                </button>
                            </div>
                        </div>

                        {/* LOVE REPORT CARD */}
                        <div className="bg-[#FFF5C3] p-6 border-4 border-[#1a1a2e] box-shadow-hard group cursor-pointer">
                            <div className="border-4 border-double border-[#1a1a2e] p-6 h-full flex flex-col items-center text-center relative">
                                <div className="absolute top-0 left-0 bg-[#E91E63] text-white px-3 py-1 font-body font-black uppercase text-xs border-r-4 border-b-4 border-[#1a1a2e]">Spicy</div>

                                <div className="bg-[#E91E63] p-4 rounded-full border-4 border-[#1a1a2e] mb-6 group-hover:scale-110 transition-transform">
                                    <Heart size={40} className="text-[#FFC107] fill-[#FFC107]" />
                                </div>

                                <h3 className="font-hindi-hero text-5xl text-[#009688] mb-2">लव लाइफ</h3>
                                <h4 className="font-retro-west text-xl text-[#1a1a2e] mb-6">THE VIBE CHECK</h4>

                                <p className="font-body font-bold text-[#1a1a2e]/70 mb-8 text-lg">
                                    Situationships, soulmates, or just trauma bonds? Find out if they are a green flag or a walking red flag.
                                </p>

                                <button className="w-full bg-[#1a1a2e] text-white font-black py-3 border-2 border-transparent uppercase hover:bg-[#009688] hover:text-[#FFF5C3] transition-colors">
                                    Check Toxicity
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- CALCULATOR FORM --- */}
            <section className="py-24 px-6 bg-[#FFF5C3] border-t-4 border-[#1a1a2e]">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#FFC107] p-2 border-4 border-[#1a1a2e] box-shadow-hard transform rotate-1">
                        <div className="bg-[#FFF5C3] border-2 border-[#1a1a2e] p-8 md:p-12">
                            <div className="text-center mb-10">
                                <div className="inline-block border-2 border-[#1a1a2e] rounded-full p-3 mb-4 bg-[#1a1a2e] text-[#FFC107]">
                                    <Sparkles size={24} />
                                </div>
                                <h2 className="font-hindi-hero text-5xl text-[#1a1a2e] mb-2">फ्री डेमो</h2>
                                <p className="font-body font-black uppercase text-[#E91E63] tracking-widest">Vibe Check Your Destiny</p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input type="text" placeholder="YOUR NAME" className="flex-1 bg-white border-4 border-[#1a1a2e] p-4 font-body font-bold placeholder:text-gray-400 focus:outline-none focus:border-[#E91E63]" />
                                    <input type="text" placeholder="BIRTH DATE (DD/MM/YYYY)" className="flex-1 bg-white border-4 border-[#1a1a2e] p-4 font-body font-bold placeholder:text-gray-400 focus:outline-none focus:border-[#E91E63]" />
                                </div>
                                <button className="w-full bg-[#E91E63] text-white font-retro-west text-2xl py-4 border-4 border-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-[#FFC107] transition-colors shadow-lg mt-4">
                                    MANIFEST IT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER --- */}
            <footer className="bg-[#1a1a2e] text-[#FFF5C3] pt-16 pb-8 px-6 border-t-8 border-[#FFC107]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    <div>
                        <span className="font-retro-west text-4xl mb-2 block text-[#E91E63] drop-shadow-[2px_2px_0px_#FFF5C3]">ASTRALIS</span>
                        <p className="font-body text-sm opacity-70">
                            Ancient Wisdom. Modern Chaos.<br />
                            Made for the internet generation.
                        </p>
                    </div>
                    <div className="flex gap-6 font-body font-bold uppercase text-sm tracking-widest text-[#009688]">
                        <a href="#" className="hover:text-white">Manifesto</a>
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">DM Us</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default GenZRetroLanding;
