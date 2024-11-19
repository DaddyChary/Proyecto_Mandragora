// Imports
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const ruta = require('./routes/routes.js'); // Ajusta a tus rutas

// Instancias
const app = express();

// Configuración del servidor HTTP
const server = http.createServer(app); // Usamos `http.Server` para crear el servidor
const PORT = 2000; // Configura el puerto

// Datos simulados (para enviar en la ruta)
let simulatedData = {
    humedad: 50,
    temperatura: 25
};

// Rutas para obtener datos simulados
app.get('/api/simulatedData', (req, res) => {
    // Actualiza los datos simulados
    simulatedData.humedad = Math.random() * (100 - 30) + 30; // Rango de humedad (30% - 100%)
    simulatedData.temperatura = Math.random() * (35 - 15) + 15; // Rango de temperatura (15°C - 35°C)

    // Envía los datos simulados como respuesta JSON
    res.json({
        humedad: simulatedData.humedad.toFixed(0), // Redondea a 0 decimales
        temperatura: simulatedData.temperatura.toFixed(0) // Redondea a 0 decimales
    });
});

// Settings
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
server.listen(PORT, () => {
    console.log(`Servicio levantado: http://localhost:${PORT}`);
});

// Exporta `app` si es necesario en otros archivos
module.exports = app;
