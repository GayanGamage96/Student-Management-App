
var connection = require("../db/db_connection")

const addStudent = (req, res) => {
    
    connection.query('INSERT INTO student VALUES(?,?,?,?,?)', [req.body.std_id, req.body.name, req.body.address, req.body.registered_date, req.body.course], (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
}

const updateStudent = (req, res) => {
    
   
    connection.query('UPDATE student SET name =?, address=?, registered_date=?,course=? WHERE std_id = ?',[req.body.name,req.body.address,req.body.registered_date,req.body.course,req.params.std_id],(err,result)=>{
       
        if (err) throw err
        res.json({message:'successfully updated'})
       
        
    })



}

const deleteStudent = (req, res) => {
    connection.query('DELETE FROM student WHERE std_id=?', [req.params.std_id], (err, rows) => {
        if (err) throw err
        res.json({message:"successfully deleted"})
    })
}

const getAllStudent = (req, res) => {
    
    connection.query('SELECT * FROM student', (err, result) => {
        if (err) throw err
        res.json(result)
    })
}

const getStudentById = () => {
    connection.query('SELECT * FROM student WHERE std_id=?', [req.params.id], (err, rows) => {
        if (err) throw err
        res.json(rows)
    })
}

const searchStudent = () =>{
    connection.connect((error)=>{
        if (error) throw error;
        let query = "SELECT * FROM student WHERE name LIKE ?";
        let value = "%"
    
        connection.query(query,[value],(error,results)=>{
            if(error) throw error;
            console.log(results);
        });
    });
}





module.exports = {
    addStudent,
    updateStudent,
    deleteStudent,
    getAllStudent,
    getStudentById,
    searchStudent
   
}
