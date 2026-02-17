import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { OrderProvider } from './context/OrderContext';
import LandingPage from './pages/LandingPage';
import InputForm from './pages/InputForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Payment from './pages/Payment';
import Dashboard from './pages/Dashboard';
import Verify from './pages/Verify';
import AuthGuard from './components/auth/AuthGuard';

function App() {
  return (
    <Router>
      <UserProvider>
        <OrderProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/generate-report" element={<InputForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verify" element={<Verify />} />

            {/* Protected Routes */}
            <Route path="/payment" element={
              <AuthGuard>
                <Payment />
              </AuthGuard>
            } />
            <Route path="/dashboard" element={
              <AuthGuard>
                <Dashboard />
              </AuthGuard>
            } />
          </Routes>
        </OrderProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
