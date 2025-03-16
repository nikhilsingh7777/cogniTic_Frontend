import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const Landing = () => {
    useEffect(() => {
        const user = localStorage.getItem('user'); // Checking user authentication
        if (!user) {
            alert('Not logged in');
            window.location.href = '/'; // Redirect to login page
        }
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>COGNIZANCE'25 ACCO. & SCAN PORTAL</h1>

            <div style={styles.buttonContainer}>
                <Link to="/ticketing" style={{ ...styles.button, ...styles.scanButton }}>SCAN Portal</Link>
                <Link to="/alloter" style={styles.button}>Alloter</Link>
                <Link to="/controls" style={styles.button}>Controls</Link>
                <Link to="/excel-upload" style={styles.button}>Mailer</Link>
            </div>
        </div>
    );
};

// Inline CSS styles
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
        marginBottom: '30px',
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'column', // Arrange buttons vertically
        alignItems: 'center',
        gap: '15px', // Space between buttons
    },
    button: {
        textDecoration: 'none',
        color: '#fff',
        fontSize: '18px',
        fontWeight: 'bold',
        padding: '12px 20px',
        borderRadius: '8px',
        backgroundColor: '#9bc7f2', // New button color
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        transition: '0.3s ease-in-out',
        width: '220px',
        textAlign: 'center',
    },
    scanButton: {
        backgroundColor: '#2c3e50', // Different color for the SCAN button
    },
};

// Add hover effects dynamically
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("a");
    buttons.forEach(button => {
        button.addEventListener("mouseenter", () => {
            button.style.backgroundColor = "#1a73e8"; // Darker blue on hover
            button.style.transform = "scale(1.05)"; // Slight zoom-in effect
        });
        button.addEventListener("mouseleave", () => {
            button.style.backgroundColor = styles.button.backgroundColor; // Restore original color
            button.style.transform = "scale(1)";
        });
    });
});

export default Landing;
