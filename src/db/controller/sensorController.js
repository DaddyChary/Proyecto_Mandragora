const io = require('../server').io;
const {query} = require('express')
const conn = require('../connection.js')

let sensorData = []; // Aquí se almacenarán temporalmente los datos del sensor

// Obtener datos del sensor
const getSensorData = (req, res) => {
    res.json(sensorData);
};

// Recibir datos del sensor
const postSensorData = (req, res) => {
    const { humidity, timestamp } = req.body;
    if (humidity !== undefined && timestamp) {
        const newData = { humidity, timestamp };
        sensorData.push(newData);
        
        // Emitir los datos a todos los clientes conectados
        io.emit('sensorData', newData);

        res.status(201).json({ message: 'Datos recibidos', data: newData });
    } else {
        res.status(400).json({ message: 'Datos inválidos' });
    }
};

module.exports = { getSensorData, postSensorData };
