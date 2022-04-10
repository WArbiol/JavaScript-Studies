"use strict";

require("core-js/modules/es.array.concat.js");

function testingES8(text1, text2) {
  alert("".concat(text1, "\n").concat(text2));

  for (var _len = arguments.length, names = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    names[_key - 2] = arguments[_key];
  }

  console.log(names);
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