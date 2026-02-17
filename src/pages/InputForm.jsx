import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useOrder } from '../context/OrderContext';
import axios from 'axios';

const InputForm = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const { saveBirthDetails } = useOrder();

    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        time: '',
        place: '',
        lat: '',
        lon: ''
    });

    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Debounce logic for 3 seconds
    useEffect(() => {
        const timer = setTimeout(async () => {
            if (query.length > 2) {
                try {
                    const apiKey = import.meta.env.VITE_LOCATIONIQ_API_KEY;
                    const response = await axios.get(`https://api.locationiq.com/v1/autocomplete?key=${apiKey}&q=${query}&limit=5&format=json`);
                    setSuggestions(response.data);
                    setShowSuggestions(true);
                } catch (error) {
                    console.error("Error fetching location suggestions:", error);
                    setSuggestions([]);
                }
            } else {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        }, 3000); // 3 seconds debounce

        return () => clearTimeout(timer);
    }, [query]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLocationChange = (e) => {
        setQuery(e.target.value);
        // Clear previous lat/lon if user starts typing again
        if (formData.lat || formData.lon) {
            setFormData(prev => ({ ...prev, lat: '', lon: '', place: e.target.value }));
        } else {
            setFormData(prev => ({ ...prev, place: e.target.value }));
        }
    };

    const handleSelectLocation = (location) => {
        setQuery(location.display_name);
        setFormData(prev => ({
            ...prev,
            place: location.display_name,
            lat: location.lat,
            lon: location.lon
        }));
        setShowSuggestions(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveBirthDetails(formData);

        if (user) {
            navigate('/payment');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="min-h-screen bg-[#FFF5C3] flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white border-4 border-[#1a1a2e] box-shadow-hard p-8">
                <h2 className="font-retro-west text-3xl text-center mb-6 text-[#1a1a2e]">ENTER COSMIC DATA</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-body font-black uppercase text-sm mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-2 border-[#1a1a2e] p-2 font-body font-bold focus:outline-none focus:border-[#E91E63]"
                        />
                    </div>
                    <div>
                        <label className="block font-body font-black uppercase text-sm mb-1">Birth Date</label>
                        <input
                            type="date"
                            name="dob"
                            required
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full border-2 border-[#1a1a2e] p-2 font-body font-bold focus:outline-none focus:border-[#E91E63]"
                        />
                    </div>
                    <div>
                        <label className="block font-body font-black uppercase text-sm mb-1">Birth Time</label>
                        <input
                            type="time"
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full border-2 border-[#1a1a2e] p-2 font-body font-bold focus:outline-none focus:border-[#E91E63]"
                        />
                    </div>

                    {/* Location Autocomplete */}
                    <div className="relative">
                        <label className="block font-body font-black uppercase text-sm mb-1">Place of Birth</label>
                        <input
                            type="text"
                            value={query}
                            onChange={handleLocationChange}
                            placeholder="Search City..."
                            className="w-full border-2 border-[#1a1a2e] p-2 font-body font-bold focus:outline-none focus:border-[#E91E63]"
                            required
                        />
                        {showSuggestions && suggestions.length > 0 && (
                            <ul className="absolute z-10 w-full bg-white border-2 border-[#1a1a2e] box-shadow-hard mt-1 max-h-48 overflow-y-auto">
                                {suggestions.map((item) => (
                                    <li
                                        key={item.place_id}
                                        onClick={() => handleSelectLocation(item)}
                                        className="p-2 hover:bg-[#FFF5C3] cursor-pointer font-body text-sm border-b border-gray-200 last:border-b-0"
                                    >
                                        {item.display_name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="block font-body font-black uppercase text-sm mb-1">Latitude</label>
                            <input
                                type="number"
                                step="any"
                                name="lat"
                                required
                                placeholder="Auto-filled"
                                value={formData.lat}
                                onChange={handleChange}
                                className="w-full border-2 border-[#1a1a2e] p-2 font-body font-bold focus:outline-none focus:border-[#E91E63]"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block font-body font-black uppercase text-sm mb-1">Longitude</label>
                            <input
                                type="number"
                                step="any"
                                name="lon"
                                required
                                placeholder="Auto-filled"
                                value={formData.lon}
                                onChange={handleChange}
                                className="w-full border-2 border-[#1a1a2e] p-2 font-body font-bold focus:outline-none focus:border-[#E91E63]"
                            />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-[#E91E63] text-white font-black uppercase py-3 border-2 border-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-[#FFC107] transition-colors mt-6">
                        Proceed
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InputForm;
