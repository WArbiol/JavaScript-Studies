function testingES8(text1, text2, ...names) {
    alert(`${text1}\n${text2}`)
    console.log(names)
}
/* 
@babel/core - coração
@babel/cli  - usar linha de comando 
@babel/preset-env - converter ES6 ou superior para ES5

npx babel testing-es8.js retorna direto na linha
de comando sem a virgula
   depois do text2

npx babel testing-es8.js -o nomedoarquivo.js
-o de output

para es5:

npx babel testing-es8.js -o arquivo.js --presets=@babel/preset-env
*/


/*
Para transpilar um diretório interiro
npx babel src --out-dir dist --presets=@babel/preset-env
--out-dir é para o diretório de saída
*/