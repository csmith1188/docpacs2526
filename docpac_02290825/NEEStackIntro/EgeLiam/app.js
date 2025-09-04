const express = require("express");
const app = express();
const port = 3000;
const {name} = require("ejs"); 

app.set("view engine", "ejs");

app.listen(3000, () => { /* log success here */ });

app.get('/', (req, res) => {
    res.send("ok");
});
app.get('/template', (req, res) => {
    const name = req.query.name || "Guest";
    res.render("template", { name: name});
})


