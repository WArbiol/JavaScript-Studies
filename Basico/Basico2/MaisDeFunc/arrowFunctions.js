//also anonymous functions
/*ao invés de: 

let doublespeed = function(v){
    return v * 2
}

usamos
*/
let doublespeed = (v) => {
    return v * 2
}
//Como ela tem APENAS UMA LINHA podemos fazer:

doublespeed = (v) => v * 2

//E como tem apenas UM PARAMETRO podemos simplificar mais:

doublespeed = v => v * 2

console.log(doublespeed(40))

