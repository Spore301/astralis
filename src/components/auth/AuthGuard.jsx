import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

const AuthGuard = ({ children }) => {
    const { user, loading } = useUser();

    if (loading) {
        return <div>Loading...</div>; // TODO: Better loading state
    }

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default AuthGuard;
