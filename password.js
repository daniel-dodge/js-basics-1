const { strictEqual } = require('assert')
const readline = require('readline')
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log('| |_ ___| | |___ \n' +
`${"|   | -_| | | . |"}\n`   + `${"|_|_|___|_|_|___|"}`);
console.log("Welcome to the Password Validator tool")
reader.question(" Press enter to start  ", function(answer){
    console.log(' _____ \n' +
    `${"|___  |"}\n`   + `${"  |  _|"}\n` + `${"  |_|  "}\n` + `${"  |_|  "}\n`)
    reader.question("What is your password?   ", function(answer){
        
        if (answer.length >= 10) {
            console.log(' ___|_|___ ___ \n' +
            `${"|   | |  _| -_|"}\n`   + `${"|_|_|_|___|___|"}`);
            
            console.log("thats a goood password")
        } else {
            console.log('               _| \n' +
            `${" _|          _|    "}\n`   + `${"   _|    _|  _|    "}\n` + `${"     _|      _|    "}\n` + `${"   _|        _|    "}\n`+ `${" _|      _|  _|    "}\n    `+ `${"           _|  "}\n`)
            console.log("you def getting hacked")
        }
    })
})