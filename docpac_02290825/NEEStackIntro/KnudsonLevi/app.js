const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.listen(3000, () => {console.log('Server is running on http://localhost:3000');});
app.get('/', (req, res) => {
    res.send("Welcome to My App!");
});
app.get('/endpoint', (req, res) => {
    console.log("Endpoint was accessed");
    let username = "Guest";
    if (req.query.username) {
        username = req.query.username;
    }
    res.render('templatefile', {name: username});
});