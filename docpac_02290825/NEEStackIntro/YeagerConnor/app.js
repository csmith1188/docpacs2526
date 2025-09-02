const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Shawn Joeman')
  })
  
  app.get('/index', (req, res) => {
    let name = req.query.name || 'John Showman'
    res.render('index', { name: name })
  })



app.listen(port);
