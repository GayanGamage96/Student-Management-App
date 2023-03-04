var connection = require("../db/db_connection")

const addStudent = (req, res) => {
    connection.query('INSERT INTO student VALUES(?,?,?,?,?,?)', [req.body.std_id, req.body.name, req.body.address, req.body.registered_date, req.body.course, req.body.image], (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
}

const updateStudent = (req, res) => {

}

const deleteStudent = (req, res) => {

}

const getAllStudent = (req, res) => {

}

const getStudentById = () => {

}

module.exports = {
    addStudent,
    updateStudent,
    deleteStudent,
    getAllStudent,
    getStudentById
}
