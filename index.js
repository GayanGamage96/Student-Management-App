const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const student = require('./routes/student-route')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/v1/student', student)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
