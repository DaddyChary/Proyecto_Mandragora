const { Router } = require('express');
const calendarioController = require('../db/controller/calendarioController');
const router = Router();

router.get('/', async (req, res) => {
    try {
        const data = await calendarioController.getAll();
        res.status(200).json(data);
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Error al obtener los eventos' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const data = await calendarioController.getOne(id);
        res.status(200).json(data);
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Error al obtener el evento' });
    }
});

router.post('/', async (req, res) => {
    const { title, date, description } = req.body;
    try {
        const newData = { title, date, description };
        const result = await calendarioController.create(newData);
        res.status(201).json({ message: 'Evento creado', result });
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Error al crear el evento' });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, date, description } = req.body;
    try {
        const updatedData = { title, date, description };
        const result = await calendarioController.update(id, updatedData);
        res.status(200).json({ message: 'Evento actualizado', result });
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Error al actualizar el evento' });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await calendarioController.delete(id);
        res.status(200).json({ message: 'Evento eliminado', result });
    } catch (err) {
        console.error(err.stack);
        res.status(500).json({ error: 'Error al eliminar el evento' });
    }
});

module.exports = router;
