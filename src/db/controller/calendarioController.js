const conn = require('../connection.js');

const TABLA = "MonitoreoPlanta";

// Obtener todos los registros de monitoreo (planta)
function getAll() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA} ORDER BY fecha_hora DESC`;
        conn.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

// Obtener un único registro por su ID
function getOneBy(id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA} WHERE id = ?`;
        conn.query(query, [id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

// Insertar un nuevo monitoreo en la base de datos
function insert(data) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLA} SET ?`;
        conn.query(query, data, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

// Actualizar los datos de monitoreo de una planta
function update(data) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${TABLA} SET ? WHERE id = ?`;
        conn.query(query, [data, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

// Eliminar un registro de monitoreo por su ID
function deleteBy(id) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${TABLA} WHERE id = ?`;
        conn.query(query, [id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

module.exports = { getAll, getOneBy, insert, update, deleteBy };
