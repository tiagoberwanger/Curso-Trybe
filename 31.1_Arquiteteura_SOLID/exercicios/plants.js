const express = require('express')
const app = express()
const port = 3000

const {getPlants} = require('./index')

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.get('/plants', async (_req, res) => {
  const allPlants = await getPlants();
  res.send(allPlants)
})

app.listen(port, () => console.log(`Running at ${port}!`))