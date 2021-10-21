const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const connectDB = () => {
    mongoose.connect(MONGO_URI, (err) => {
        if(err) console.log('Error in DB Connectivity!')
        else console.log('DB Connected Successfully!')
    })
}

module.exports = connectDB