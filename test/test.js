const test = require('../src/index.js')
let name = test.readline("Hello! What is your name? ")
console.log("Hello " + name + "!")
console.log(test.add(4, 5))