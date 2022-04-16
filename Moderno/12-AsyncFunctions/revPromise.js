const sleep = (ms, cb) => {
  const myPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      cb(null, true)
    }, ms)
    resolve("Aqui imprime primeiro\n"+
            "Não deveria mandar o resolve quando"+
            " a promise estivesse concluida")
  })
  return myPromise
}

function start() {
  const ONE_SEC_IN_MS = 2000;

  sleep(ONE_SEC_IN_MS, console.log).then(men=>console.log(men))
}//

start();