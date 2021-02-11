const path = require('path')

const arquivo = '/home/tiago-trybe/Learn_NodeJS/learn/arquivo.txt'

//path dirname, basename, extname
console.log(path.dirname(arquivo)) // /home/tiago-trybe/Learn_NodeJS/learn
console.log(path.basename(arquivo)) // arquivo.txt
console.log(path.extname(arquivo)) // .txt

//path.join()
const name = 'tiago-trybe'
const fullPath = path.join('/home', '/', name, '/Learn_NodeJS', '/learn', '/', path.basename(arquivo)) 
console.log(fullPath);

//path.resolve()
console.log(path.resolve('learn', 'arquivo.txt'));

//path.parse()
console.log(path.parse(arquivo));

/*{
root: '/',
dir: '/home/tiago-trybe/Learn_NodeJS/learn',
base: 'arquivo.txt',
ext: '.txt',
name: 'arquivo'
} */