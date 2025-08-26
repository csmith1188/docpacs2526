const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(3000, () => { "Server started" })

app.get('/', (req, res) => {
    res.send('Welcome to My App!!');
});

app.get('/endpoint', (req, res) => {
    if (req.query.name) {
        name = req.query.name;
    }
    else {
        name = 'Guest';
    }
    res.render('temp', { name });
})
