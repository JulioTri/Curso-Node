/* importar funcion desde multiplicar.js */
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,

                })
                .option( 'l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                })
                .check( (argv,options) => {
                    if ( isNaN( argv.b ) ) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

console.clear();

console.log( argv );

//manera de imprimir la base enviada a la funcion 
// console.log( 'base: yargs', argv.base );

/* imprime los procesos que se han ejecutado */
// console.log(process.argv);

// Forma de mandar al proceso que se esta haciendo algunas variables 
// const [,,arg3 = 'base=9'] = process.argv;
// separa la respuesta guardad en la variable donde encuentre el simbolo de igual 
// const [,base = 9] = arg3.split('=');
// console.log(base);

// const base = 5;


// Crear el archivo .txt de la tabla de multiplicar
crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(error => console.log(error))
