
//PADRÂO ABAIXO:
const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {

    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });

  });
}

//PADRÂO ABAIXO:
const fs = require('fs').promises;

const text = 'Texto teste 3';

function writingFiles() {
  fs.writeFile('./meu-arquivo.txt', text);
}

writingFiles();

//EXEMPLO
readFilePromise('file1.txt')
  .then((content) => {
    console.log(`Lido file1.txt com ${content.byteLength} bytes`);
    return readFilePromise('file2.txt');
  })
  .then(content => {
    console.log(`Lido file2.txt com ${content.byteLength} bytes`);
    return readFilePromise('file3.txt');
  })
  .then((content) => {
    console.log(`Lido file3.txt com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.log(`Erro ao ler arquivos: ${err.message}`);
  });