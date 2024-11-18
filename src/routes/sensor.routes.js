const express = require('express');
const router = express.Router();

// Rutas de ejemplo
router.get('/', (req, res) => {
    res.render('index', { title: 'Monitoreo de Sensores' });
});

router.get('/api/sensors', (req, res) => {
    res.json({ message: 'Endpoint de sensores' });
});

module.exports = router;
