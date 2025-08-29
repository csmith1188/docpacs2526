const express = require('express');
const app = express();

const PORT = 3000 || process.env.PORT;

app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Server is running on http://localhost:' + PORT);
});

app.get('/', (req, res) => {
    res.send("Welcome to My App!!");
});

app.get('/endpoint', (req, res) => {
    let username = 'Guest';

    if(req.query.name) {
        username = req.query.name;
    };

    res.render('templatefile', { name: username });
});

app.use((req, res) => {
    res.redirect('/');
});