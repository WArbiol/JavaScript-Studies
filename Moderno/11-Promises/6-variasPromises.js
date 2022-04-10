const increaseVelocity = function(velocityToIncrease) {
  return new Promise((resolve, reject) => {
    if(velocityToIncrease <= 0) {
      reject("Frenagem acionada")
    } else {
      resolve(velocityToIncrease * 0.9)
    }
  })
}

const newBatteryConsumption = function(currentVelocity, velocityToIncrease) {
  return new Promise((resolve, reject) => {
    let newBatteryConsumption = (currentVelocity + velocityToIncrease) / 10000
    if(newBatteryConsumption > 0) {
      resolve(newBatteryConsumption)
    } else {
      reject("Consumo zerado!")
    }
  })
}

let velocity = 70

let vincreased = increaseVelocity(velocity)
let batteryConsumption = newBatteryConsumption(80, velocity)

//Promise.all ou da sucesso nas duas ou da erro

Promise.all([vincreased, batteryConsumption]).then(results => {
    console.log(results)
}).catch(messages => {
    console.log(messages) })
//Funsiona se uma promisse NÃO DEPENDER DA OUTRA