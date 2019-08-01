const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    });


}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer
    }
}


const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        compĺetado: false
    };
    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, comp = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => { return tarea.descripcion === descripcion });

    for (let t of listadoPorHacer) {
        if (t.descripcion === descripcion) {
            t.completado = comp;
            guardarDB();
            return;
        }
    }
    console.log('No existe esa tarea');

}


const borrar = (descripcion) => {


    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (nuevoListado.length === listadoPorHacer.length) {
        return false
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }


}


module.exports = {

    crear,
    getListado,
    actualizar,
    borrar
}