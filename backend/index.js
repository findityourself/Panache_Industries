const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON (if you plan to accept JSON requests)
app.use(express.json());

// Simple test route
app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

// Add your API routes here...

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
