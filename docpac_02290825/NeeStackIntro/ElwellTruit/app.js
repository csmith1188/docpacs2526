const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.listen(3000, () => { console.log("Server is running on port 3000") })

app.get('/', (req, res) => {
    res.send("Welcome to My App!!")
})

app.get('/user', (req, res) => {
    let username = req.query.name || "Guest"
    res.render("templatefile", { username: username })
})
