/* importar funcion desde multiplicar.js */
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// console.log( argv );

// Crear el archivo .txt de la tabla de multiplicar
crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'.rainbow))
    .catch(error => console.log(error))
