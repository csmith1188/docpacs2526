const express = require('express'); //Require gets the library

const app = express(); //express is imported from the require function, and express was installed in the terminal
//The express function creates an instance of Express, which is used to configure and manage my web server

app.set("view engine", "ejs");

app.listen(3000, () => { console.log("Success") });

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.get('/endpoint', (req, res) => {
    let username = "Guest";
    
    //if query name is given, replace username with query name
    if (req.query.name) {
        username = req.query.name;
    }
    res.render("index", {name: username});
});







// const PORT = 3000;

// app.listen(PORT); // start web server

