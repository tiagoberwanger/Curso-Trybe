const fs = require('fs')

//readFile
fs.readFile('/home/tiago-trybe/Learn_NodeJS/learn/arquivo.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

//readFileSync
try {
  const data = fs.readFileSync('/home/tiago-trybe/Learn_NodeJS/learn/arquivo.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}