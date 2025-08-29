const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/hello', (req, res) => {
  let name = req.query.name || 'Guest';
  
  res.render('index.ejs', {name: name});
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});