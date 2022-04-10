const mat = require("./mat.js")
const readline = require('readline');
var rl = readline.createInterface(
    process.stdin, process.stdout);

rl.question('Qual o primeiro número? ', x => {
    rl.question('Qual o segundo número?  ', y => {
        console.log(`Sua resposta é:         ${mat.sum(Number(x), Number(y))}`)
    })
});
/* 
npm install --save-dev webpack webpack-cli
pasta src  ter o index.js
pasta dist ter o index.html (e o scr="main.js")
npx webpack
*/