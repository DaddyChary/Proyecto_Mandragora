const { Router } = require('express');
const calendarioController = require('../db/controller/calendarioController');
const ruta = Router();

ruta.get('/', async (req, res) => {
    try {
        const data = await calendarioController.getAll();
        res.render('calendario', { calendario: data }); // Pass data to the view
    } catch (err) {
        console.error(err.stack);
        res.json({ message: 'Error al obtener los eventos', codeStatus: 500, data: err });
    }
});

ruta.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await calendarioController.getOne(id);
        res.status(200).json(data); // Send back as JSON
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ message: 'Error al obtener el evento', codeStatus: 500, data: err });
    }
});

ruta.post('/', async (req, res) => {
    const { title, date, description } = req.body;
    try {
        const newData = { title, date, description };
        const result = await calendarioController.create(newData);
        res.status(201).json({ message: 'Evento creado', result });
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ message: 'Error al crear el evento', codeStatus: 500, data: err });
    }
});

ruta.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, date, description } = req.body;
    try {
        const updatedData = { title, date, description };
        const result = await calendarioController.update(id, updatedData);
        res.status(200).json({ message: 'Evento actualizado', result });
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ message: 'Error al actualizar el evento', codeStatus: 500, data: err });
    }
});

ruta.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await calendarioController.delete(id);
        res.status(200).json({ message: 'Evento eliminado', result });
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ message: 'Error al eliminar el evento', codeStatus: 500, data: err });
    }
});

module.exports = ruta;
