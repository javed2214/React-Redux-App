const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const cors = require('cors')

connectDB()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', require('./routes/authRoute'))
app.use('/api/todo', require('./routes/todoRoute'))

app.get('*', (req, res) => {
    res.status(404).json({
        error: '404 Page Not Found!'
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is Running at PORT: ${PORT}`)
})