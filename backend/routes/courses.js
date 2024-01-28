const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const courseSchema = new mongoose.Schema({
  name: String,
  course_code: String,
});

const Course = mongoose.model('Course', courseSchema);

router.get('/', async (_, res) => {
  try {
    const courses = await Course.find().populate('branch');
    res.json(courses);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate('branch');
    if (!course) return res.status(404).send('Course not found');
    res.json(course);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.json(newCourse);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).send('Course not found');
    await course.remove();
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;