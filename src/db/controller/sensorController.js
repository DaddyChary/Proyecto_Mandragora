let latestSensorData = { humedad: 50, temperatura: 25 }; // Datos iniciales simulados

// Historial de datos (almacenado en memoria por ahora)
let sensorHistory = [];

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

        // Guardar los datos en el historial con la fecha actual
        const timestamp = new Date().toISOString(); // Obtenemos la fecha actual en formato ISO
        sensorHistory.push({ humedad, temperatura, timestamp });

        // Limitar el historial a las últimas 10 entradas (opcional)
        if (sensorHistory.length > 10) {
            sensorHistory.shift(); // Elimina el primer registro si se supera el límite
        }

        res.status(200).send({ message: "Datos recibidos correctamente" });
    } else {
        res.status(400).send({ message: "Datos incompletos222" });
    }
};

// Obtener datos simulados
const getSimulatedData = (req, res) => {
    const simulatedData = {
        humedad: Math.random() * (100 - 30) + 30, // Rango de humedad (30% - 100%)
        temperatura: Math.random() * (35 - 15) + 15, // Rango de temperatura (15°C - 35°C)
    };
    res.json({
        humedad: simulatedData.humedad.toFixed(2), // Redondea a 2 decimales
        temperatura: simulatedData.temperatura.toFixed(2), // Redondea a 2 decimales
    });
};

// Obtener el historial de datos de los sensores
const getSensorHistory = (req, res) => {
    res.json(sensorHistory); // Devuelve el historial de datos
};

module.exports = {
    getSensorData,
    postSensorData,
    getSimulatedData,
    getSensorHistory, // Exportar la nueva función
};
