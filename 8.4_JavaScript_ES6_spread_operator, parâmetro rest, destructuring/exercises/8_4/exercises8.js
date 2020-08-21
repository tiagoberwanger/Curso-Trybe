// Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento: Dica: use default params.

const assert = require('assert')

const greet = (name, greeting = "Hi") => `${greeting} ${name}`

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")