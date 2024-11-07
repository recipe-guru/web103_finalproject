import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/NavBar.css';

import { logoutUser } from '../api/api';
import { UserContext } from '../context/UserContext';

export default function NavBar() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logoutUser();
        window.location.reload();
    };

    return (
        <div className="navbar">
            <div
                onClick={() => navigate('/')}
                className="title">
                Recipe Guru
            </div>
            {user ? (
                <div className="logout">
                    <button
                        onClick={handleLogout}
                    >Logout</button>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}
