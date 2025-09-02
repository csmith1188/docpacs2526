const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.listen(3000, () => {/* Log success here */});

app.get("/", (req, res) => {
    res.send('Welcome to My App!!');
});

app.get("/user", (req, res) => {
    let name = "guest";
    const templatefile = "templatefile";
    if (req.query.name) {
        name = req.query.name;
        res.render(templatefile, {name: name});
    }
});