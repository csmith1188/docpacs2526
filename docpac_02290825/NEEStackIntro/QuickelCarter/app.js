const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/endpoint', (req, res) => {
    let name = req.query.name || 'Guest';
    res.render('endpoint', { name: name });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});