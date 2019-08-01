const descripcion = {

    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'


};

const completado = {

    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea',
    type: 'boolean'

};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado compleado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar elemento del json', {

        descripcion

    })
    .help()
    .argv;

module.exports = {
    argv
}