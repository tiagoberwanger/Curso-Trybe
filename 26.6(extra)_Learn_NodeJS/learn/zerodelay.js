//You can use settimeout 0 to delay a specified function.
setTimeout(() => {
  console.log('after ')
}, 0)

console.log('before')
console.log('...')

//You can use setImmediate to do the same.
setImmediate(() => {console.log('after ')})
console.log('before')
console.log('...')