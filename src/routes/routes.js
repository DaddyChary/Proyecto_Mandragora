const { Router } = require('express');
const ruta = Router();

// Importar las rutas
const sensorRoutes = require('./sensor.routes.js');
const calendarioRoutes = require('./calendario.routes.js');
const { getSimulatedData } = require('../db/controller/sensorController.js');

// Middleware de autenticación básica
const authMiddleware = (req, res, next) => {
    const auth = { login: 'admin', password: 'admin' };

    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');

    if (login && password === auth.login && password === auth.password) {
        return next();
    }

    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).json({ message: 'Acceso no autorizado' });
};
// Aplicar el middleware de autenticación para todas las rutas
ruta.use(authMiddleware);

// Ruta base
// ruta principal de la aplicación
ruta.get('/', async (req, res) => {
    try {
        const simulatedData = getSimulatedData(); // No es necesario await porque getSimulatedData ya no es asincrónica
        const titulo = "Invernadero Digital";
        res.render('index', { titulo, simulatedData }); // Pasa los datos simulados a la vista
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Error al cargar los datos');
    }
});


ruta.use('/sensors', sensorRoutes); // Rutas para sensores
ruta.use('/calendario', calendarioRoutes); // Rutas para el calendario

module.exports = ruta;
