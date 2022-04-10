const spaceship = {
  name: "Rontaro",
  currentBateryCharge: 50,
  consumptionPerKms: 0.00008
}
const updateBateryCharge = function(chargeConsumed) {
  return new Promise((resolve, reject) => {
    spaceship.currentBateryCharge -= chargeConsumed
    if(spaceship.currentBateryCharge > 0) {
      resolve(spaceship.currentBateryCharge)
    } else {
      reject("Bateria esgotada! Nave será desativada em alguns segundos.")
    }
  })
}
const calculateBateryConsumption = function(velocity, seconds) {
  return new Promise((resolve, reject) => {
    if(spaceship.consumptionPerKms <= 0 || velocity <= 0) {
      reject("Nave está parada!")
    } else {
      let chargeConsumed = spaceship.consumptionPerKms * velocity * seconds
      resolve(chargeConsumed)
    }
  })
}
/*
calculateBateryConsumption(90, 300).then(carga =>{  
    updateBateryCharge(carga).then(novacaga => {
        console.log(novacaga)
    }).catch(message => console.log(message))
}).catch(message => console.log(message))
*/

//or return promise

calculateBateryConsumption(90, 300).then(carga =>{  
    return updateBateryCharge(carga)
}).then(novacaga => {
        console.log(novacaga)
}).catch(message => console.log(message))
//CATCH SERVE PARA QUALQUER UMA DAS PROMISES