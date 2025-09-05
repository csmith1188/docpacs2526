const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(3000, () => { /* log success here */ });
app.get('/', (req, res) => {
    res.send('Welcome to My App!!');
})
app.get('/get2', (req, res) => {
    let username = 'Guest';
    const templatefile = "templatefile";
    if (req.query.name) { 
        username = req.query.name; 
        res.render(templatefile, { name: username });
    }
})
