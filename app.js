const { options } = require('yargs')
const argv = require('./config/yargs')
const { crearArchivo } = require('./helpers/multiplicar')



// console.log(argv)
const base = argv.base
const listar = argv.listar
const hasta = argv.hasta

crearArchivo(base, listar,hasta)
  .then(response => {
    console.log(`la tabla-${base}.txt se creó satisfactoriamente! papu! :D`)
  })
  .catch(err => {
    console.log(err)
  })







