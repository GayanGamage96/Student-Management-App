
const express = require('express');
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(cors())
const port = 3000
// const bodyParser = require('body-parser')

const student = require('./routes/student-route')
const user = require('./routes/user-route')

// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json())

app.use('/api/v1/student', student)
app.use('/api/v1/user',user)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
