const fs = require('fs')

fs.rename(`/home/tiago-trybe/Learn_NodeJS/learn/file.txt`, `/home/tiago-trybe/Learn_NodeJS/learn/arquivo.txt`, err => {
  if (err) {
    return console.error(err)
  }
  //done
})