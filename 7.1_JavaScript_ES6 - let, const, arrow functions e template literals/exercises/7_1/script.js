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

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))