let ship = "Helmet";
let newship = '';

for(let i = 0; i < ship.length; i++){
    console.log(ship[i]);
    //newship = newship + ship[i];
    newship+=ship[i];
}
console.log("\n newship = " + newship);