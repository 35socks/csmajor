const express = require('express');
const path = require('path');

const app = express();
const port = 3696;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/results', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'results.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
