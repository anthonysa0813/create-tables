const argv = require("yargs")
  .option('b', {
    alias: "base",
    demandOption: true,
    default: 5,
    describe: "the base required by the table",
    type: "number"
  })
  .option('l', {
    alias: "listar",
    demandOption: false,
    default: false,
    describe: "drawing the list in the terminal",
    type: "boolean"
  })
  .option('h', {
    alias: "hasta",
    demandOption: false,
    default: 10,
    describe: "the table required this number by execute the program by default is 10",
    type: "number"
  })
  .check((argv, options) =>  {
    if(isNaN(argv.base)) {
      throw "the base isn't a number"
    }
    return true
  })
  .check((argv, options) =>  {
    if(isNaN(argv.hasta)) {
      throw "the base isn't a number"
    }
    return true
  })
  .argv


module.exports = argv