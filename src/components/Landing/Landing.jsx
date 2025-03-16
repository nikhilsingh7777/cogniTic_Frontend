import React from 'react';
import { Link } from "react-router-dom"; // No need to import BrowserRouter, Routes, Route here
import { useEffect } from 'react';

const Landing = () => {
    useEffect(() => {
        const user = localStorage.getItem('user'); // Assuming 'user' key stores authentication details
        
        if (!user) {
            alert('Not logged in');
            window.location.href = '/'; // Redirect to login page
        }
    }, []);

    return (
        <>
            <p>COGNIZANCE'25 ACCO. & SCAN PORTAL</p>
            <nav>
                <ul>
                    <li><Link to="/ticketing">SCAN Portal</Link></li>
                     <li><Link to="/controls">Controls</Link></li>
                    <li><Link to="/alloter">Alloter</Link></li>
                    <li><Link to="/excel-upload">Mailer</Link></li> {/* Added */}
                </ul>
            </nav>
        </>
    );
}
export default Landing;
