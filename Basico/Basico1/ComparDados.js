let ship = "FE Supernova";
let vel = 80;

//comparando valores:
console.log("ship == vel?", ship == vel);
console.log("vel == 80?", vel == 80);
console.log('vel == "80"?', vel == "80");

//comparando tipos:
console.log('tipo_vel === "80"?', vel === "80");
console.log('tipo_vel === 80?', vel === 80);
console.log('tipo_vel === 80.0?', vel === 80.0);

//Diferença:
console.log("vel != 80?", vel != 80);
console.log("vel != 70?", vel != 70);
console.log('vel != "80"?', vel != "80"); //não considera tipo

//diferença com tipos
console.log('vel !== "80"', vel !== "80"); 

//comparação string (é por ordem alfabética):
console.log('"za" > "abcde" ?"', "za" > "abcde");