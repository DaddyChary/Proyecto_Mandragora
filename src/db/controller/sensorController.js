const { io } = require('../../server');  // Importar io desde server.js

// Datos simulados de los sensores
// Crea el objeto de datos simulados
let simulatedData = {
    humedad: 50,
    temperatura: 25
};

// Simulación de actualización de datos cada 5 segundos
setInterval(() => {
    simulatedData.humedad = Math.random() * (100 - 30) + 30; // Rango de humedad (30% - 100%)
    simulatedData.temperatura = Math.random() * (35 - 15) + 15; // Rango de temperatura (15°C - 35°C)

    console.log("Datos simulados actualizados:", simulatedData);
}, 5000);  // Actualiza cada 5 segundos

// Función para obtener los datos simulados
const getSimulatedData = () => {
    console.log("Enviando datos simulados:", simulatedData);
    return simulatedData;  // Solo retorna los datos simulados
};

// Otros controladores (si los tienes)
const getSensorData = (req, res) => {
    res.json(sensorData); // Retorna los datos recibidos por POST
};

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

// Exportar la función getSimulatedData
module.exports = { getSensorData, postSensorData, getSimulatedData };
