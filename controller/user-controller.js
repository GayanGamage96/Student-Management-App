var connection = require("../db/db_connection")


const signUp = (req, res) => {
    const user_id= req.body.user_id;
    const email = req.body.email;
    const user_name = req.body.username;
    const password = req.body.password;
    


    connection.query("INSERT INTO users (user_id, user_name, email,  password) VALUES (?, ?, ?,?)", [user_id,email, user_name, password], 
        (err, result) => {
            if(result){
                res.send(result);
            }else{
                res.send({message: "ENTER CORRECT ASKED DETAILS!"})
            }
        }
    )
}


const login=  (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    connection.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "WRONG USERNAME OR PASSWORD!"})
                }
            }
        }
    )
}

module.exports = {
    signUp,
    login
}