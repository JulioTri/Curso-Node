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

const getEmpleado = (id, callback) => {

    const empleado = empleados.find( e => e.id === id )?.nombre
    if (empleado) {
       callback(null,empleado)
    }else{
        callback(`Empleado con id ${id} no existe`)
    }
    
}

const getSalario = (id, callback) => {

    const salario = salarios.find(s=> s.id === id)?.salario
    if (salario) {
        callback(null,salario)
    }else{
        callback(`Salario con id ${id} no existe`)
    }
}

/* callback hell hace referencia a los llamados de callback dentro de otros callback que 
con el tiempo pueden empezar a producir confusion en el codigo */

const id = 1
/* callback */
getEmpleado(id, ( err, empleado) =>{
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }

    /* otro callback dentro del callback */
    getSalario(id,(err,salario)=>{
        if (err) {
            return console.log(err);
        }
    
        console.log('El empleado: ',empleado,'tiene un salario de: ',salario)
    })
})

