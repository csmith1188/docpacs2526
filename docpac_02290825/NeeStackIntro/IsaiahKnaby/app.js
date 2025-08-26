const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('DON CHEADLE!')
})

app.get('/index', (req, res) => {
  let name = req.query.name || 'DON CHEADLE!'
  res.render('index', { name: name })
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
