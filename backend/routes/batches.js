const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const batchSchema = new mongoose.Schema({
  name: String
});

const Batch = mongoose.model('Batch', batchSchema);

router.get('/', async (_, res) => {
  try {
    const batches = await Batch.find();
    res.json(batches);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);
    if (!batch) return res.status(404).send('Batch not found');
    res.json(batch);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newBatch = new Batch(req.body);
    await newBatch.save();
    res.json(newBatch);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const batch = await Batch.findById(req.params.id);
    if (!batch) return res.status(404).send('Batch not found');
    await batch.remove();
    res.json({ message: 'Batch deleted' });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;