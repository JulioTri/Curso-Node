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

/* Cuando se usa bien las promesas se puede solucionar el inconveniente de los callbacks hell */

const getEmpleado = (id) => {

    /* cuando se hace la promesa se llama un callback resolve que se ejecuta si todo sale bien 
    mientras que si hay error se llama el reject */
    return new Promise((resolve, reject)=>{

        const empleado = empleados.find( e => e.id === id )?.nombre;

        /* operacdor ternario */
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

const id = 3

/* getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err)) */

getEmpleado(id)
    .then(empleado => {
        getSalario(id)
            .then(salario => {
                console.log('El empleado: ', empleado, 'tiene un salario de: ', salario);
            })
            .catch(err => console.log(err))
            
    })
    .catch(err => console.log(err))
