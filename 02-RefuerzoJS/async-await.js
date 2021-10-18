const empleados = [
    {
        id:1,
        nombre: 'Fernando'
    },
    {
        id:2,
        nombre: 'Camila'
    },
    {
        id:3,
        nombre: 'Daniela'
    },
];
const salarios = [
    {
        id:1,
        salario: 1000
    },
    {
        id:2,
        salario: 1500
    },
];


const getEmpleado = (id) => {


    return new Promise((resolve, reject)=>{

        const empleado = empleados.find( e => e.id === id )?.nombre;

        /* operador ternario */
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });  
}

const getSalario = ( id ) => {

    return new Promise((resolve, reject)=>{

        const salario = salarios.find( s => s.id === id)?.salario;

        (salario) ? resolve(salario) : reject(`No existe el salario para el id ${id}`);

    });

}

/* convierte la funcion en una funcion asincrona es decir retorna una promesa */
const getInfoUsuario = async(id) => {

    try {
        /* el await se usa con una funcion que tiene una promesa  */
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;

    } catch (error) {
        /* cuando se manda el return solo se dispara el .then y no el catch en el callback */
        /* return error */
        throw error;
    }  

}

const id = 3;

getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN!');
        console.log(msg)
    })
    /* cuando se usa throw el error se propaga y ya se dispara el catch  */
    .catch(err => {
        console.log('TODO MAL!');
        console.log(err)
    })



