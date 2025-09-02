const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/endpoint', (req, res) => {
    let username = 'Guest'

    if (req.query.name) {
        username = req.query.name;
    }

    res.render('template', { name: username });
})


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
