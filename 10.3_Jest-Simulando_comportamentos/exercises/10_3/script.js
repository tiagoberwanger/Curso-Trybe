// Crie uma função que gere um número aleatório.

const randomNumber = () => {
    return parseInt(Math.random()*100)
}

module.exports = randomNumber;
// Crie três funções com os seguintes comportamentos

const uppercased = (str) => str.toUpperCase();

const firstLetter = (str) => str.charAt(0)

const concatenate = (str1, str2) => str1 + str2;

module.exports = {uppercased, firstLetter, concatenate};
