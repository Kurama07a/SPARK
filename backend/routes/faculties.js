const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const facultySchema = new mongoose.Schema({
  name: String,
  branch: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch'
  }],
  batch: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Batch'
  }],
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const Faculty = mongoose.model('Faculty', facultySchema);

router.get('/', async (_, res) => {
  try {
    const faculties = await Faculty.find().populate('branch');
    res.json(faculties);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id).populate('branch');
    if (!faculty) return res.status(404).send('Faculty not found');
    res.json(faculty);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newFaculty = new Faculty(req.body);
    await newFaculty.save();
    res.json(newFaculty);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) return res.status(404).send('Faculty not found');
    await faculty.remove();
    res.json({ message: 'Faculty deleted' });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;