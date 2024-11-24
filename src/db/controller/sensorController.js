// src/db/controller/sensorController.js

let latestSensorData = { humedad: 50, temperatura: 25 }; // Datos iniciales simulados

// Obtener datos reales (opcional: podrías integrarlo con una base de datos en el futuro)
const getSensorData = (req, res) => {
    res.json(latestSensorData); // Devuelve los datos más recientes
};

// Recibir datos reales enviados por el script de Python
const postSensorData = (req, res) => {
    const { humedad, temperatura } = req.body;

    if (humedad && temperatura) {
        latestSensorData = { humedad, temperatura }; // Actualiza los datos
        console.log(`Datos actualizados: Humedad - ${humedad}, Temperatura - ${temperatura}`);
        res.status(200).send({ message: "Datos recibidos correctamente" });
    } else {
        res.status(400).send({ message: "Datos incompletos" });
    }
};

// Obtener datos simulados
const getSimulatedData = (req, res) => {
    const simulatedData = {
        humedad: Math.random() * (100 - 30) + 30, // Rango de humedad (30% - 100%)
        temperatura: Math.random() * (35 - 15) + 15, // Rango de temperatura (15°C - 35°C)
    };
    res.json({
        humedad: simulatedData.humedad.toFixed(0), // Redondea a 0 decimales
        temperatura: simulatedData.temperatura.toFixed(0), // Redondea a 0 decimales
    });
};

module.exports = {
    getSensorData,
    postSensorData,
    getSimulatedData,
};
