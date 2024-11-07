import React, { useState, useContext } from 'react';
import '../css/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';
import { UserContext } from '../context/UserContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data = await loginUser(email, password);
            setUser(data);
            setErrorMessage('');
            navigate('/');
        } catch (error) {
            setErrorMessage(error.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">

            <h2>Login</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="login-button" onClick={handleLogin}>
                Login
            </button>
            <a href="/signup" className="signup-link">Don't have an account? Sign up</a>
        </div>
    );
}
