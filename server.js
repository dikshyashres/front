const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve 'afterlog.html' as the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'afterlog.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// Dummy data for alerts
const alerts = [
    { type: 'Intruder Detected', location: 'KEC library', time: '12:30 PM' },
    { type: 'Suspicious Object Found', location: 'Parking Lot', time: '11:45 AM' }
];

// Endpoint to fetch alerts
app.get('/api/alerts', (req, res) => {
    res.json(alerts);
});

