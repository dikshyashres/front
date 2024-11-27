// server.js
const express = require('express');
const app = express();
const path = require('path');

// Middleware to serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));  // Serve HTML, JS, CSS files from the 'public' directory

// API endpoint for getting alerts
app.get('/api/alerts', (req, res) => {
    // Sample alert data
    const alerts = [
        {
            "id": 1,
            "type": "Intruder Detected",
            "location": "Library",
            "time": "12:30 PM"
        },
        {
            "id": 2,
            "type": "Suspicious Activity",
            "location": "Parking Lot",
            "time": "11:45 AM"
        }
    ];

    // Send the alerts data as a JSON response
    res.json(alerts);
});

// Route for root to serve afterlog.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'afterlog.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


