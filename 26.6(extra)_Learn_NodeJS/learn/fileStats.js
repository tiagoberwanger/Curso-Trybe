const fs = require('fs')
fs.stat('/home/tiago-trybe/Learn_NodeJS/learn/arquivo.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(stats.isFile()) //true
  console.log(stats.isDirectory()) //false
  console.log(stats.isSymbolicLink()) //false
  console.log(stats.size) //2517
})