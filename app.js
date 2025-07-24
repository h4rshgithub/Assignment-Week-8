const express = require('express');
const multer = require('multer');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// ✅ File Upload Route
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded.' });
  res.json({
    message: 'File uploaded successfully!',
    file: req.file
  });
});

// ✅ Weather API Route (OpenWeatherMap)
const API_KEY = '82f2cb6f4d4ccc9961ee7951d3fb1b6b'; // Replace with your API key

app.get('/weather/:city', async (req, res, next) => {
  try {
    const { city } = req.params;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    res.json(response.data);
  } catch (err) {
    next(err);
  }
});

// ✅ Sample Error Route
app.get('/error-demo', (req, res, next) => {
  try {
    throw new Error('Intentional error for testing.');
  } catch (err) {
    next(err);
  }
});

// ✅ Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    error: {
      message: err.message || 'Internal Server Error'
    }
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
