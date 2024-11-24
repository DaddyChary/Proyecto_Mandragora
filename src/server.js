// server.js

const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const sensorRoutes = require('../src/routes/sensor.routes.js');

const app = express();
const server = http.createServer(app);
const PORT = 2000;

// Configuración
app.set('view engine', 'ejs'); // Motor de plantillas
app.set('views', path.join(__dirname, 'views')); // Carpeta de vistas
app.use(morgan("dev")); // Logger
app.use(express.json()); // Soporte para JSON
app.use(express.urlencoded({ extended: true })); // Soporte para formularios
app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos
app.use(bodyParser.json());

// Rutas
app.use(sensorRoutes);

// Iniciar servidor
server.listen(PORT, () => {
    console.log(`Servicio levantado: http://localhost:${PORT}`);
});
