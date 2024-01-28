const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


const SemesterSchema = new mongoose.Schema({
  semesterNumber: Number,
  courses: [{
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }]
});

const BranchSchema = new mongoose.Schema({
  name: String,
  semesters: [SemesterSchema]
});

const Branch = mongoose.model('Branch', BranchSchema);

router.get('/', async (_, res) => {
  try {
    const branches = await Branch.find();
    res.json(branches);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    if (!branch) return res.status(404).send('Branch not found');
    res.json(branch);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newBranch = new Branch(req.body);
    await newBranch.save();
    res.json(newBranch);
  } catch (err) {
    res.status(400).send(err.message);
  } 
});

router.delete('/:id', async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    if (!branch) return res.status(404).send('Branch not found');
    await branch
    res.json(branch);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;