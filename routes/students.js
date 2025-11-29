const express = require('express');
const router = express.Router();

let students = [
    {
        name: "Ali Khan",
        rollNo: "02-134231-103",
        present: true
    },
    {
        name: "Sara Ahmed",
        rollNo: "02-134231-021",
        present: false
    },
    {
        name: "Bilal",
        rollNo: "02-134231-039",
        present: true
    },
    {
        name: "Fatima Ali",
        rollNo: "02-134231-112",
        present: true
    }
]

router.get('/', (req, res) => {
  res.json(students);
});

router.post('/', (req, res) => {
  const { name, rollNo, present } = req.body;
  
  const newStudent = {
    name,
    rollNo,
    present
  };
  
  students.push(newStudent);
  res.status(201).json(newStudent);
});

router.patch('/:rollNo', (req, res) => {
  const rollNo = req.params.rollNo;
  const { present } = req.body;
  
  const student = students.find(s => s.rollNo === rollNo);
  
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  
  student.present = present;
  res.json(student);
});

router.get('/present', (req, res) => {
  const presentStudents = students.filter(s => s.present === true);
  res.json(presentStudents);
});

router.get('/absent', (req, res) => {
  const absentStudents = students.filter(s => s.present === false);
  res.json(absentStudents);
});

module.exports = router;