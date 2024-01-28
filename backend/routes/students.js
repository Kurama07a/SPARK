const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const studentSchema = new mongoose.Schema({
  name: String,
  branch: {
    type: Schema.Types.ObjectId,
    ref: 'Branch'
  },
  batch: {
    type: Schema.Types.ObjectId,
    ref: 'Batch'
  }
});

const Student = mongoose.model('Student', studentSchema);

router.get('/', async (_, res) => {
  try {
    const students = await Student.find().populate('branch').populate('batch');
    res.json(students);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('branch').populate('batch');
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json(newStudent);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send('Student not found');
    await student.remove();
    res.json({ message: 'Student deleted' });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;