const io = require('../../server').io;
const conn = require('../connection.js');

// Datos temporales de los sensores
let sensorData = []; 

// Obtener datos de los sensores reales
const getSensorData = (req, res) => {
    res.json(sensorData); // Retorna los datos recibidos por POST
};

// Recibir datos de sensores reales (usando POST)
const postSensorData = (req, res) => {
    const { humidity, timestamp } = req.body; // Datos enviados en el cuerpo de la solicitud
    if (humidity !== undefined && timestamp) {
        const newData = { humidity, timestamp };
        sensorData.push(newData);
        
        // Emitir los datos a todos los clientes conectados en tiempo real
        io.emit('sensorData', newData);

        res.status(201).json({ message: 'Datos recibidos', data: newData });
    } else {
        res.status(400).json({ message: 'Datos inválidos' });
    }
};

// Simulación de datos
let simulatedData = {
    humedad: 50, // Humedad inicial
    temperatura: 25, // Temperatura inicial
};

// Generar datos simulados automáticamente cada 5 segundos
setInterval(() => {
    simulatedData.humedad = Math.random() * (100 - 30) + 30; // Rango de humedad (30% - 100%)
    simulatedData.temperatura = Math.random() * (35 - 15) + 15; // Rango de temperatura (15°C - 35°C)
    console.log("Datos simulados actualizados:", simulatedData);
}, 5000);

// Endpoint para obtener los datos simulados
const getSimulatedData = (req, res) => {
    console.log("Enviando datos simulados:", simulatedData);
    res.json(simulatedData); // Enviar datos simulados como respuesta
};

module.exports = { getSensorData, postSensorData, getSimulatedData };
