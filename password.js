console.log("Welcome to the Password Validator tool")

const { strictEqual } = require('assert')
const readline = require('readline')
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

reader.question("What is your password", function(answer){
    
    if (answer.length > 10) {
        console.log("thats a goood password")
    } else {
        console.log("you def getting hacked")
    }
})