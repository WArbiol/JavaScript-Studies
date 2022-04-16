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