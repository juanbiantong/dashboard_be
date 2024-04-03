// Import required modules
const express = require('express');
const { connection } = require('./database');

// Create Express app
const app = express();

// Define routes and other middleware as needed
// Example route
app.get('/', async (req, res) => {
 const msg = "Hello, world!";
 res.json(msg);
});

app.get('/connect', async (req, res) => {
 const connetionState = await connection()
 res.send(connetionState);
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server is running on port http://localhost:${PORT}`);
});
