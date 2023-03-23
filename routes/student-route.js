const express = require('express')
const router = express.Router()

const {
    addStudent,
    updateStudent,
    deleteStudent,
    getAllStudent,
    getStudentById,
    searchStudent
} = require('../controller/student-controller')

router.get('/', getAllStudent)

router.get('/:id', getStudentById)

router.post('/', addStudent)

router.put('/:std_id', updateStudent)

router.delete('/:std_id', deleteStudent)

router.get('/:name', searchStudent)

module.exports = router
