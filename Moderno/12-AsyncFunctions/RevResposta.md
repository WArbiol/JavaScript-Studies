## Converter para Promise e Async/await:
```
const sleep = (ms, cb) => {
  setTimeout(() => {
    cb(null, true)
  }, ms)
}

function start() {
  const ONE_SEC_IN_MS = 1000;

  sleep(ONE_SEC_IN_MS, console.log)
}

start();
```

### Promise:
```
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
```
### Async/await
```
const sleep = async (ms, cb) => {
  await setTimeout(() => {
    cb(null, true)
  }, ms)
}

function start() {
  const ONE_SEC_IN_MS = 1000;

  sleep(ONE_SEC_IN_MS, console.log)
}

start();
```
## Perguntas e respostas
- **O que é um callback? como ele funciona?**
    - É uma função que se passa como parâmetro
- **O que é uma Promise e quais são seus estados?**
    - Uma promise tem dois estados: Pendente ou Estabelicida
    - Caso estabelecida ela pode ser: Realizada ou Recusada
- **Qual a diferença de um callback para uma Promise?**
    -  Utilizar um callback é utilizar uma função não definida, se define nos parametros.
    Utilizar uma promisse é utilizar uma função já definida mas com retorno não instantaneamente definido 
- **Qual a diferença de uma Promise para async/await?**
    - async/await retorna o retorno da promise da async function, enquanto a promisse só retorna o retorno a partir do .then(retorno => {...})
- **Como lidar com erros em callbacks?**
    - Utilizando try catch.
- **Como lidar com erros em Promise?**
    - .catch(err => {...})
- **Como lidar com erros em async/await?**
    - if (condição de erro) {
        return Promise.reject("Erro: ...")
    }

    - async function blablabla(args) {
        try{
            ...
        } catch (err) {
            console.log(err)
        }
    }

- **Por que o "b" é exibido antes do "a"?**
    ```
    setTimeout(() => {
      console.log('a')
    }, 0);
    console.log('b')
    ```
    - A o eventloop prioriza código síncrono em sua fila de execução

Pequena dúvida:
- Porque setTimeout é assíncrono se não usamos await ou nenhuma formatação de funções ass;incronas?