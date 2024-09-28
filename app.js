const express = require('express');
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page!');
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
