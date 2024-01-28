const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AttendanceRecordSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student'
  },
  status: Boolean
});

const AttendanceSchema = new Schema({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  },
  faculty: {
    type: Schema.Types.ObjectId,
    ref: 'Faculty'
  },
  batch: {
    type: Schema.Types.ObjectId,
    ref: 'Batch'
  },
  date: {
    type: Date,
    default: Date.now
  },
  attendance_records: [AttendanceRecordSchema]
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);

router.post('/', async (req, res) => {
  const attendance = new Attendance(req.body);
  await attendance.save();
  res.status(201).send(attendance);
});

router.get('/', async (req, res) => {
  const { batch, course } = req.query;
  const attendance = await Attendance.find({ batch, course }).populate('attendanceRecords.student');
  res.send(attendance);
});

module.exports = router;