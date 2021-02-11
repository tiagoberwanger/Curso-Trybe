//throw new Error
throw new Error('Ran out of coffee')

//Error handling with async/await
async function someFunction() {
  try {
    await someOtherFunction()
  } catch (err) {
    console.error(err.message)
  }
}