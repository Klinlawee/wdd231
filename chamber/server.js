require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch'); // Needed for fetch in Node.js
const app = express();

// Enable CORS for frontend access
app.use(cors());

// Weather API endpoint
app.get('/api/weather', async (req, res) => {
  try {
    const city = req.query.city || 'Trier,DE';
    const units = req.query.units || 'metric';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}&units=${units}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Weather API error:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});