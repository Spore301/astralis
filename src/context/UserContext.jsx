import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // { name, email, token, isVerified }
    const [loading, setLoading] = useState(false);

    const sendMagicLink = async (email) => {
        setLoading(true);
        try {
            // TODO: Replace with actual API call
            console.log("Sending magic link to...", email);
            const token = btoa(email); // Mock token: base64 encoded email
            const magicLink = `${window.location.origin}/verify?token=${token}&email=${email}`;
            console.log(`MAGIC LINK: ${magicLink}`); // Use this to "click" the link
            return { success: true, message: "Magic link sent! Check your console." };
        } catch (error) {
            console.error("Magic link failed", error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    const verifyMagicLink = async (token, email) => {
        setLoading(true);
        try {
            // TODO: Replace with actual verification API
            console.log("Verifying token...", token);
            // Mock verification
            if (token === btoa(email)) {
                setUser({
                    email,
                    phone_number: '',
                    first_name: 'Test',
                    last_name: 'User',
                    reports: [],
                    isVerified: true,
                    user_id: 'mock-user-id',
                    session_id: 'mock-session-id'
                });
                return { success: true };
            } else {
                throw new Error("Invalid token");
            }
        } catch (error) {
            console.error("Verification failed", error);
            return { success: false, error: error.message };
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, loading, sendMagicLink, verifyMagicLink, logout }}>
            {children}
        </UserContext.Provider>
    );
};
