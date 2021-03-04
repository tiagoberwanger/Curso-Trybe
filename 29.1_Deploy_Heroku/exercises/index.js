const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (_req, res) => 
  res.send('Deploy at Heroku exercise!'))

app.get('/route', (_req, res) => 
res.send('Deploy route!'))

app.listen(port, () => console.log(`Running ${port}`))