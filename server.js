import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { addFlower, deleteFlower, updateFlower, getAllFlowers, getFlowerById } from './database.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// CREATE - POST нової квітки
app.post('/flowers', async (req, res) => {
    try {
        const flower = req.body;
        const result = await addFlower(flower);
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send({ error: 'Error adding flower' });
    }
});

// READ - GET список квіток
app.get('/flowers', async (req, res) => {
    try {
        const flowers = await getAllFlowers();
        console.log(flowers); // Логування результату
        res.send(flowers);
    } catch (error) {
        res.status(500).send({ error: 'Error fetching flowers' });
    }
});

// READ - GET квітку за ID
app.get('/flowers/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const flower = await getFlowerById(id);
        if (flower) {
            res.send(flower);
        } else {
            res.status(404).send({ error: 'Flower not found' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Error fetching flower' });
    }
});

// UPDATE - PUT оновлення квітки за ID
app.put('/flowers/:id', async (req, res) => {
    const { id } = req.params;
    const flower = req.body;
    try {
        const success = await updateFlower(parseInt(id), flower);
        if (success) {
            res.send(flower);
        } else {
            res.status(404).send({ error: 'Flower not found' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Error updating flower' });
    }
});

// DELETE - видалення квітки за ID
app.delete('/flowers/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const success = await deleteFlower(parseInt(id));
        if (success) {
            res.status(204).send();
        } else {
            res.status(404).send({ error: 'Flower not found' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Error deleting flower' });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
