import React from 'react'
import '../css/NavBar.css';

import { logoutUser } from '../api/api';

export default function NavBar() {
    const handleLogout = () => {
        logoutUser();
        window.location.reload();
    };

    return (
        <div className="navbar">
            <div className="title">
                Recipe Guru
            </div>
            <div className="logout">
                <button
                onClick={handleLogout}
                >Logout</button>
            </div>
        </div>
    )
}
