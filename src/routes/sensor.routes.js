// src/routes/sensor.routes.js

const express = require('express');
const router = express.Router();
const {
    getSensorData,
    postSensorData,
    getSimulatedData,
} = require('../db/controller/sensorController.js');

// Página principal
router.get('/', (req, res) => {
    res.render('index', { title: 'Monitoreo de Sensores' });
});

// Ruta para calendario

router.get('/api/calendario', (req, res) => {
    res.render('calendario', { title: 'Calendario' });
});

// Ruta para evento

// Rutas para datos reales
router.get('/p', getSensorData); // Obtener datos reales
router.post('/', postSensorData); // Recibir datos reales

// Ruta para datos simulados
router.get('/api/simulated-data', getSimulatedData); // Obtener datos simulados

module.exports = router;
