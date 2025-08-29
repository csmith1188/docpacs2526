const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.send('Welcome to my app!');
});

app.get('/endpoint', (req, res) => {
    let username = 'Guest';
    if (req.query.name) {
        username = req.query.name;
    }
    res.render('name', { name: username });
});