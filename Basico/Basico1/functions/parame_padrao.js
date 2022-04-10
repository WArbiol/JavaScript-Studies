function greet(name, message = "Olá"){
    alert(message + ", " + name);
}

greet("João de Barros")

//caso chamemos:
//greet()
//teremos "Olá, undefined"
//porque "undefined" é padrão de parametro

//BOAS PRATICAS:
//DEIXAR OS PARAM PADRÕES NO FIM
//Se não pode dar problema em não declarar no meio

//function up(v, unit="km/h", a){
//    v+=a
//    console.log(v + unit);
//}
//
//resulta em: up(50, , 5)
//
//Uncaught SyntaxError: Unexpected token ',' 
//
//function up(v, unit="km/h", a){
//    v+=a
//    console.log(v + unit);
//}
//  
//up(50, 5)
//
//resulta em: NaN