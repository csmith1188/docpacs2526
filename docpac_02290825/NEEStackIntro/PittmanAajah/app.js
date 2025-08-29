const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
});

app.get('/', (req, res) => {
    res.send('Welcome to My App!!');
});

app.get('/endpoint', (req, res) => {
    let name = 'Guest'; 
    if (req.query.name) {
        usernname = req.query.name;
    }
    
    res.render('templatefile', { name: username });
});

