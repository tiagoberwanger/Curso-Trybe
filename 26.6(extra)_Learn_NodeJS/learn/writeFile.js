const fs = require('fs')

const content = 'Some content!'

//Modify all content in file
fs.writeFile('/home/tiago-trybe/Learn_NodeJS/learn/arquivo.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

//Add content to the end
fs.writeFile('/home/tiago-trybe/Learn_NodeJS/learn/arquivo.txt', content, { flag: 'a+' }, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

//Append to a file
fs.appendFile('/home/tiago-trybe/Learn_NodeJS/learn/arquivo.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //done!
})


/*The flags you'll likely use are:

r+ --> open the file for reading and writing
w+ --> open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing
a --> open the file for writing, positioning the stream at the end of the file. The file is created if not existing
a+ --> open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing*/
