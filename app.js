
const {crearArchivo} = require('./helpers/multiplicar');
const argv  = require('./config/yargs');
const colors = require('colors');


// option 'l', listar, boolena, defaultl.
console.clear();

// console.log(argv);

// console.log(process.argv);

// console.log('base: yargs =', argv.base);
// const[ , , arg3 = 'base=5'] = process.argv;
// const[ , base=5] = arg3.split('=')

// console.log(base);

// // const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado correctamente'.bgBlue))
    .catch(err => console.log(err));