/* librerira de file system para el manejo de carpetas */
const fs = require('fs');

/* con async se combierte en una promesa */

const crearArchivo = async(base = 3 , listar = false) => {

    try {
        
        let salida = "";

        for (let i = 1; i <= 10; i++) {
            salida += `${base} * ${i} = ${base * i} \n`;
        }

        if (listar) {
            console.log('===========================');
            console.log('       Tabla del:',base);
            console.log('===========================');
            console.log(salida);
        }

       
        

        /* Forma asincrona llamando un callback */
        /* fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt creado`);
        })
        */

        /* Forma sincrona */

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
        
    } catch (error) {
        throw error;
    }
};

/* exportar el modulo donde el nombre crearArchivo es el que se llamara*/
module.exports = {
    crearArchivo, /* 'crearArchivo' es igual que crearArchivo = crearArchivo */
}