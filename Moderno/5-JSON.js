let planet_json = '{\n' +
  '"name": "Terra",\n' +
  '"init": "00:00",\n' +
  '"finish": "23:59",\n' +
  '"diameter": 12756.2\n' +
  '}';
let planet = JSON.parse(planet_json)
/* Transforma em objeto */
console.log(planet)
console.log(planet.name)
console.log(planet.diameter)