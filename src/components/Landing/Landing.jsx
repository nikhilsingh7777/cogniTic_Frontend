import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Landing = () => {
    useEffect(() => {
        const user = localStorage.getItem('user'); // Assuming 'user' key stores authentication details
        if (!user) {
            alert('Not logged in');
            window.location.href = '/'; // Redirect to login page
        }
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>COGNIZANCE'25 ACCO. & SCAN PORTAL</h1>
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><Link to="/ticketing" style={styles.navLink}>SCAN Portal</Link></li>
                    <li style={styles.navItem}><Link to="/alloter" style={styles.navLink}>Alloter</Link></li>
                    <li style={styles.navItem}><Link to="/controls" style={styles.navLink}>Controls</Link></li>
                    <li style={styles.navItem}><Link to="/excel-upload" style={styles.navLink}>Mailer</Link></li>
                </ul>
            </nav>
        </div>
    );
};

// Inline CSS styles (CSS-in-JS approach)
const styles = {
    container: {
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f7fa',
        fontFamily: 'Arial, sans-serif',
    },
    heading: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#2c3e50',
        marginBottom: '20px',
    },
    navbar: {
        backgroundColor: '#34495e',
        padding: '15px 0',
        width: '100%',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        margin: 0,
    },
    navItem: {
        margin: '0 15px',
    },
    navLink: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '10px 15px',
        borderRadius: '5px',
        transition: '0.3s',
        backgroundColor: '#2c3e50',
    },
    navLinkHover: {
        backgroundColor: '#1abc9c',
    },
};

// Add hover effect
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.backgroundColor = styles.navLinkHover.backgroundColor;
        });
        link.addEventListener("mouseleave", () => {
            link.style.backgroundColor = styles.navLink.backgroundColor;
        });
    });
});

export default Landing;

