const deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre (){
        return `${ this.nombre } ${ this.apellido } ${this.poder}`
    }
}

/* const nombre = deadpool.nombre
const apellido = deadpool.apellido
const poder = deadpool.poder */

/* desestructuracion */
/* const {nombre, apellido, poder, edad} = deadpool  */
function imprimirHeroe( {nombre, apellido, poder, edad = 0} ){
    nombre = 'Jasahm'
    console.log(nombre, apellido, poder, edad);  

}

imprimirHeroe(deadpool)

const heroes = ['Deadpool', 'Superman', 'Batman']
/* Sin destructuracion */
/* const h1 = heroes[0]
const h2 = heroes[1]
const h3 = heroes[2] */

/* destructuracion */
const [,,h3] = heroes;
console.log(h3);