/* librerira de file system para el manejo de carpetas */
const fs = require('fs');
const colors = require('colors');

/* con async se combierte en una promesa */

const crearArchivo = async(base = 3 , listar = false, hasta = 10) => {

    try {
        
        let salida = "";
        let consola = ""

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${ 'x'.green } ${i} ${ '='.green } ${base * i} \n`;
        }

        if (listar) {
            console.log('==========================='.green);
            console.log('       Tabla del:'.blue,colors.red(base));
            console.log('==========================='.green);
            console.log( consola );
        }

       
        

        /* Forma asincrona llamando un callback */
        /* fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt creado`);
        })
        */

        /* Forma sincrona */

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }
};

/* exportar el modulo donde el nombre crearArchivo es el que se llamara*/
module.exports = {
    crearArchivo, /* 'crearArchivo' es igual que crearArchivo = crearArchivo */
}