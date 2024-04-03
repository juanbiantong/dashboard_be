// Import required modules
const express = require('express');
const { connection } = require('./database');

// Create Express app
const app = express();

app.use((req, res, next) => {
 // Allow all origins
 res.setHeader('Access-Control-Allow-Origin', '*');
 // Allow specific HTTP methods
 res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
 // Allow specific headers
 res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
 next();
});

// Define routes and other middleware as needed
// Example route
app.get('/', async (req, res) => {
 const msg = "Hello, world!";
 res.json(msg);
});

app.get('/connect', async (req, res) => {
 const connetionState = await connection()
 console.log(connetionState, "Connect");
 res.send(connetionState);
});


// Start the server
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
 console.log(`Server is running on port http://localhost:${PORT}`);
});
