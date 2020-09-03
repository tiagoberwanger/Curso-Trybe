// escreva a função findTheNeedle aqui

const arrayOfWords = ['house', 'train', 'slide', 'needle', 'book'];
const word = 'needle'

function findTheNeedle (arrayOfWords, word) {
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (word === arrayOfWords[i]) {
        return(i);
        }
    }
    return (-1);
}

module.exports = findTheNeedle;