var connection = require("../db/db_connection")

const addStudent = (req, res) => {
    connection.query('INSERT INTO student VALUES(?,?,?,?,?)', [req.body.std_id, req.body.name, req.body.address, req.body.registered_date, req.body.course], (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
}

const updateStudent = (req, res) => {
    connection.query('UPDATE student set name=?, address=?, registered_date=?, course=?, WHERE std_id=?', [req.body.name, req.body.address, req.body.registered_date, req.body.course, req.params.id], (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
}

const deleteStudent = (req, res) => {
    connection.query('DELETE FROM student WHERE std_id=?', [req.params.id], (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
}

const getAllStudent = (req, res) => {
    connection.query('SELECT * FROM student', (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
}

const getStudentById = () => {
    connection.query('SELECT * FROM student WHERE std_id=?', [req.params.id], (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
}

module.exports = {
    addStudent,
    updateStudent,
    deleteStudent,
    getAllStudent,
    getStudentById
}
