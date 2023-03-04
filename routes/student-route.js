const express = require('express')
const router = express.Router()

const {
    addStudent,
    updateStudent,
    deleteStudent,
    getAllStudent,
    getStudentById
} = require('../controller/student-controller')

router.get('/', getAllStudent)

router.get('/:id', getStudentById)

router.post('/', addStudent)

router.put('/:id', updateStudent)

router.delete('/:id', deleteStudent)

module.exports = router
