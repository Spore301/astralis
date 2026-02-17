import React, { createContext, useState, useContext, useEffect } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
    const [orderData, setOrderData] = useState(() => {
        const savedData = sessionStorage.getItem('birthDetails');
        return savedData ? JSON.parse(savedData) : null;
    });

    const saveBirthDetails = (data) => {
        setOrderData(data);
        sessionStorage.setItem('birthDetails', JSON.stringify(data));
    };

    const clearOrder = () => {
        setOrderData(null);
        sessionStorage.removeItem('birthDetails');
    };

    return (
        <OrderContext.Provider value={{ orderData, saveBirthDetails, clearOrder }}>
            {children}
        </OrderContext.Provider>
    );
};
