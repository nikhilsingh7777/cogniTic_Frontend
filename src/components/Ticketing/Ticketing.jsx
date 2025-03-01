import react from 'react';
import { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from "html5-qrcode";

const Ticket = () => {
    const [scanResult, setScanResult] = useState(null);
    const [verificationStatus, setVerificationStatus] = useState("");
    let scanner = null; // Store scanner instance
    useEffect(() => {
        // Prevent multiple instances
        if (!scanner) {
            scanner = new Html5QrcodeScanner(
                "reader",
                { fps: 10, qrbox: 250 },
                false
            );
            scanner.render(
                async (decodedText) => {
                    setScanResult(decodedText);
                    scanner.clear();
                    verifyEntry(decodedText);
                },
                (error) => {
                    console.warn(error);
                }
            );
        }
        return () => {
            // Ensure scanner is properly destroyed
            if (scanner) {
                scanner.clear()
                    .then(() => console.log("Scanner cleared"))
                    .catch((err) => console.warn("Error clearing scanner", err));
                scanner = null;
            }
        };
    }, []);
    const verifyEntry = async (qrData) => {
        try {
            const response = await fetch("http://localhost:5000/api/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ uniqueId: qrData }),
            });
            const data = await response.json();
            setVerificationStatus(data.success ? "✅ Entry Verified!" : "❌ Invalid QR Code!");
        } catch (error) {
            setVerificationStatus("⚠️ Error connecting to server.");
        }
    };
    return (
        <div className="scanner-container">
            <h1>QR Code Scanner Cognizance Portal</h1>
            {!scanResult ? (
                <div id="reader" className="scanner-box"></div>
            ) : (
                <div className="scan-result">
                    <h3>Scanned QR: <span>{scanResult}</span></h3>
                    <button className="rescan-btn" onClick={() => window.location.reload()}>
                        🔄 Rescan
                    </button>
                </div>
            )}
            <h2 className={`status-message ${verificationStatus.includes("✅") ? "success" : "error"}`}>
                {verificationStatus}
            </h2>
        </div>
    );
}

export default Ticket;