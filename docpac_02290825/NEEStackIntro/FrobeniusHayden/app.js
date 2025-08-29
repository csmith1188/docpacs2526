const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Welcome to My App!!");
});

app.get('/endpoint', (req, res) => {
    let username = "Guest";

    if (req.query.name) {
        username = req.query.name;
    }

    res.render('index', {name: username});
});

app.listen(3000, () => {console.log("Server started on http://localhost:3000")});