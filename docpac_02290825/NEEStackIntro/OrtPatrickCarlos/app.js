const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('work')});
app.get('/venture', (req, res) => {
    let name = req.query.name || "guest";
    res.render('venture', {name: name})});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})
