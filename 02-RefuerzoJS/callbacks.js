/* Un callback es una funcion que se ejecutara eventualmente como el timer 
Otra forma de verlo es que los callbacks son funciones que se mandan como argumentos*/
/* setTimeout(()=>{
    console.log('Hola mundo');
}, 1000) */

/* aca se puede ver que se manda como argumento una funcion callback que eventualmente se ejecuta dentro de el timeout */
const getUsuarioByID = ( id, callback) => {

    const usuario = {
        id, /* Es lo mismo que decir id = id lo que es redundante por eso se puede resumir */
        nombre:'Camilo'
    }

    setTimeout(()=>{
        callback(usuario)
    },1500)

}

getUsuarioByID(10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})