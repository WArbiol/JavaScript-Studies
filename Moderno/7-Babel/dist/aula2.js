"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

/*
babel.config.js para configurações do babel
diminuimos o quão grande será nosso comando com
o babel.config.js
*/

/*
@3 porque queremos a terceira versão
o core-js é para que rode o ES5 mesmo com funções
mais barra pesadas (são pacotes que importam recursos do es6+)
npm install core-js@3 --save
*/
var promise = Promise.resolve();