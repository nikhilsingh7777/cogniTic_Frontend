const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const uploadsDir = path.join(__dirname, "../uploads");

router.post("/verify", async (req, res) => {
  try {
    const { uniqueId, uniqueID } = req.body;
    const scannedId = uniqueId || uniqueID;

    if (!scannedId) {
      return res.status(400).json({ success: false, message: "QR Code data missing!" });
    }

    const participantsFilePath = path.join(uploadsDir, "allparticipants.json");
    const scannedFilePath = path.join(uploadsDir, "scanned.json");

    // Check if participant exists
    let participants = [];
    if (fs.existsSync(participantsFilePath)) {
      participants = JSON.parse(fs.readFileSync(participantsFilePath, "utf-8"));
    }
    const participantExists = participants.some((p) => p.uniqueID === scannedId);
    if (!participantExists) {
      return res.status(404).json({ success: false, message: "Invalid QR Code!" });
    }
    // Check if already scanned
    let scannedList = [];
    if (fs.existsSync(scannedFilePath)) {
      scannedList = JSON.parse(fs.readFileSync(scannedFilePath, "utf-8"));
    }
    if (scannedList.includes(scannedId)) {
      return res.status(200).json({ success: false, message: "Already Marked Present!" });
    }

    // Mark as scanned
    scannedList.push(scannedId);
    fs.writeFileSync(scannedFilePath, JSON.stringify(scannedList, null, 2));

    res.json({ success: true, message: "Entry Verified!", uniqueId: scannedId });
  } catch (error) {
    console.error("Error verifying QR Code:", error);
    res.status(500).json({ success: false, message: "Server Error! Please try again." });
  }
});
module.exports = router;