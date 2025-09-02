const { fileLoader, Template } = require('ejs');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('Welcome to my app!');
})

app.get('/about', (req, res) => {
    var username = "Guest"
    if (req.query.name) {
        username = req.query.name
    }
    res.render("templatefile", { name: username });
})
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})
