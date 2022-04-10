let nv = prompt("Qual o nome da pessoa mais velha?");
let iv = prompt("Qual a idade da pessoa mais velha?");
let nn = prompt("Qual o nome da pessoa mais nova?");
let iN = prompt("Qual a idade da pessoa mais nova?");

const diff = iv - iN;

alert(`
    Pessoa mais velha: ${nv}
    Idade: ${iv}\n
    Pessoa mais nova: ${nn}
    Idade: ${iN}\n
    Diferença de idades: ${diff}`
);