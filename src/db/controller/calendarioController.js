// calendarioController.js
const conn = require('../connection.js');

// Suponiendo que tienes una base de datos que guarda los eventos
const getAll = async () => {
    try {
        // Obtener todos los eventos de la base de datos (simulado aquí)
        const eventos = await conn.query('SELECT * FROM eventos');
        return eventos.rows;
    } catch (err) {
        throw new Error('Error al obtener los eventos');
    }
};

const getOne = async (id) => {
    try {
        const evento = await conn.query('SELECT * FROM eventos WHERE id = $1', [id]);
        return evento.rows[0];
    } catch (err) {
        throw new Error('Error al obtener el evento');
    }
};

const create = async (newData) => {
    try {
        const result = await conn.query('INSERT INTO eventos (title, date, description) VALUES ($1, $2, $3) RETURNING *', 
            [newData.title, newData.date, newData.description]);
        return result.rows[0];
    } catch (err) {
        throw new Error('Error al crear el evento');
    }
};

const update = async (id, updatedData) => {
    try {
        const result = await conn.query('UPDATE eventos SET title = $1, date = $2, description = $3 WHERE id = $4 RETURNING *',
            [updatedData.title, updatedData.date, updatedData.description, id]);
        return result.rows[0];
    } catch (err) {
        throw new Error('Error al actualizar el evento');
    }
};

const deleteEvent = async (id) => {
    try {
        const result = await conn.query('DELETE FROM eventos WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    } catch (err) {
        throw new Error('Error al eliminar el evento');
    }
};

module.exports = { getAll, getOne, create, update, deleteEvent };
