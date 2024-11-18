// Imports
const config = require('./config/config.js');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ruta = require('./routes/sensor.routes.js'); // Ajustar a tus rutas

// Instancias
const app = express();

// Settings
const PORT = config.app.port || 2000; // Prioriza el puerto desde config.js
app.set('view engine', 'ejs'); // Motor de plantillas
app.set('views', path.join(__dirname, 'views')); // Carpeta de vistas
app.set('port', PORT);

// Middleware
app.use(morgan("dev")); // Logger
app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos
app.use(express.json()); // Soporte para JSON
app.use(express.urlencoded({ extended: true })); // Soporte para formularios

// Rutas
app.use(ruta); // Importa las rutas desde el archivo correspondiente

// Servidor
app.listen(app.get('port'), () => {
    console.log(`Servicio levantado: http://localhost:${app.get('port')}`);
});
