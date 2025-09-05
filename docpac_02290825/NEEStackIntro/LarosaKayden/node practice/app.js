//const express = require('express');
//const app = express();
//var indexstring = "<h1>HELLOOOOO</h1>"

//app.set('view engine', 'ejs');


//app.use(
//    (req, res, next) => {
//        console.log("Middleware");
//        next();
//    }
//);


//app.use(
//    (req, res, next) => {
//        console.log("Middleware 2.0");
//        next();
//    }
//);


//app.get('/', (req, res) => {
//    res.send('Hello World!');
//});


//app.get('/madlibs', (req, res) => {
//    var adj = req.query.adj;
//    var ver = req.query.ver;
//    var nou = req.query.nou;

//    console.log(req.query);

//    res.render('madlibs', 
//        {
//            adjective: adj,
//            verb: ver,
//            noun: nou
//        }
//    )
//});


//app.listen(3000, () => {
//    console.log('Started server at port 3000');
//}) 


const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.listen(3000, () => { console.log('log success here'); } );

app.get('/', (req, res) => { res.send ("welcome to my app"); })

app.get('/name', (req, res) => {
    let username = "guest";
    if (req.query.username) { username = req.query.username; }
    res.render('templatefile', { name: username } );
})