import express from 'express';
const app = express();
const hostname = '127.0.0.1';
const port = 3000;


app.set('view engine', 'ejs')
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('Welcome to My App!!');
});

app.get('/endpoint', (req, res) => {
    const name = req.query.name || "guest";
    res.render('endpoint', { name })
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
