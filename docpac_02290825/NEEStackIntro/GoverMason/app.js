const express = require('express');

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to My App!!');
});

app.get('/endpoint', (req, res) => {
    let username = 'Guest';
    if (req.query.name) {
        username = req.query.name;
    }

    res.render('templatefile.ejs', { name: username });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});