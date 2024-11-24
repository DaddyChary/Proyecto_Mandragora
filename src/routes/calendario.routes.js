const { Router } = require('express');
const calendarioController = require('../db/controller/calendarioController');
const ruta = Router();

// Obtener todos los eventos
ruta.get('/calendario', async (req, res) => {
    try {
        const data = await calendarioController.getAll();  // Obtiene todos los eventos
        res.render('calendario', { calendario: data });    // Renderiza la vista con los datos
    } catch (err) {
        console.error(err.stack);
        res.json({ message: 'Error al obtener los eventos', codeStatus: 500, data: err });
    }
});

// Obtener un evento específico por ID
ruta.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await calendarioController.getOneBy(id);  // Obtiene el evento por su ID
        if (data.length > 0) {
            res.status(200).json(data[0]); // Envía el evento como JSON
        } else {
            res.status(404).json({ message: 'Evento no encontrado' });
        }
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ message: 'Error al obtener el evento', codeStatus: 500, data: err });
    }
});

// Crear un nuevo evento
ruta.post('/calendario', async (req, res) => {
    try {
        calendarioController.insert(req.body)
            .then((calendario) => {
                res.redirect('/calendario');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});


// Actualizar un evento
ruta.post('/edit/:id', async (req, res) => {
    try {
        calendarioController.update(req.body)
            .then((calendario) => {
                res.redirect('/calendario');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

// Eliminar un evento
ruta.post('/delete/:id', async (req, res) => {
    try {
        calendarioController.update(req.params.id)
            .then((calendario) => {
                res.redirect('/calendario');
            })
    } catch (error) {
        res.json({ message: 'error', codeStatus: 500, data: error });
    }
});

module.exports = ruta;
