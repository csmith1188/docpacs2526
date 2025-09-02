const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to My App!!');
});

app.get('/user', (req, res) => {
    const username = req.query.name || 'Guest';
    res.render('templatefile', { name: username });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${3000}`);
});