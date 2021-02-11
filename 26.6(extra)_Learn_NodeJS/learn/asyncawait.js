const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 3000)
  })
}

const doSomething = async () => {
  console.log(await doSomethingAsync())
}

console.log('Before')
doSomething()
console.log('After')

// ______________________________________

const asFunction = async () => {
  return console.log('test')
}

asFunction().then()
//functios are the same with Promise or AsyncAwait
const psFunction = () => {
  return Promise.resolve(console.log('test'))
}

psFunction().then() 