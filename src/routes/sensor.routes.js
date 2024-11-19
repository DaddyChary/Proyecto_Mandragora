const express = require('express');
const router = express.Router();
const {
    getSensorData, // Función para obtener datos reales
    postSensorData, // Función para enviar datos reales
    getSimulatedData, // Función para obtener datos simulados
} = require('../db/controller/sensorController.js'); // Importa las funciones del controlador

// Página principal
router.get('/', (req, res) => {
    res.render('index', { title: 'Monitoreo de Sensores' });
});
router.get('/api/calendario', (req, res) => {
    res.render('calendario', { title: 'Calendario' });
});


// Rutas para datos reales
router.get('/api/sensors', getSensorData); // Obtener datos reales
router.post('/api/sensors', postSensorData); // Enviar datos reales

// Ruta para datos simulados
router.get('/api/simulated-data', getSimulatedData); // Obtener datos simulados


module.exports = router;
