const conn = require('../connection.js');

const TABLA = "riego";

// Obtener todos los registros de riego
function getAll() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA} ORDER BY fecha DESC, hora DESC`; // Ordenar por fecha y hora
        conn.query(query, (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

// Obtener un único registro de riego por su ID
function getOneBy(id) {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLA} WHERE id = ?`;
        conn.query(query, [id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

// Insertar un nuevo evento de riego en la base de datos
function insert(data) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLA} (fecha, hora) VALUES (?, ?)`; // No usar comillas alrededor de los placeholders
        console.log(data.fecha, data.hora);
        conn.query(query, [data.fecha, data.hora], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

// Actualizar un evento de riego en la base de datos
function update(data) {
    return new Promise((resolve, reject) => {
        const query = `UPDATE ${TABLA} SET fecha = ?, hora = ? WHERE id = ?`; // Actualizar solo fecha y hora
        console.log(data.id, data.fecha, data.hora);
        conn.query(query, [data.fecha, data.hora, data.id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

// Eliminar un evento de riego por su ID
function deleteBy(id) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${TABLA} WHERE id = ?`;
        conn.query(query, [id], (error, result) => {
            return error ? reject(error) : resolve(result);
        });
    });
}

module.exports = { getAll, getOneBy, insert, update, deleteBy };
