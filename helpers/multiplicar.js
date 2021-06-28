const fs = require('fs')
const colors = require('colors')


const crearArchivo = async (base, listar, hasta) => {
  let salida = ""

  try {
    console.log("====================".green)
    console.log(` Tabla del ${base}: `.green)
    console.log("===================".green)

    for (let i = 0; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n `  
    }
    if(listar){
      console.log(salida)
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
  } catch (error) {
    return error
  }
}


module.exports = {
  crearArchivo
}