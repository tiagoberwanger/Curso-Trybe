//Part II - Exercise I
function fact(number) {
    var value=1;
    for (let i = 2; i <= number; i++) {
        value = value * i;
    }
    return value;
}

//Part II - Exercise II

const longestWord = text => {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length
            result = word
        }
    }
    return result
}

//Part II - Exercise IV
const skills = ['javaScript(SQN!)', 'css', 'html'];
const substituteWordInArray = string => {
    let stringPassed = "Tryber x na área!"
    let word = stringPassed.replace('x', string)
    return word;
}

const receiveString = text => {
    let newOrd = 0;
    let orderString = skills.sort();
    let newString = `
    ${text}
    Minhas cinco principais habilidades são:
    ` 
    for (let index = 0; index < orderString.length; index++) {
        newOrd = orderString[index];
        newString += `
        ${newOrd}
        `
    }
    return newString;
}
console.log(receiveString(substituteWordInArray('Tiago')));
