const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')) next()
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password, this.password)
}

UserSchema.methods.getSignedToken = async function(){
    const jwtSecret = process.env.JWT_SECRET
    const jwtExpireTime = process.env.JWT_EXPIRE
    return await jwt.sign({ _id: this._id, username: this.username, email: this.email }, jwtSecret, { expiresIn: jwtExpireTime })
}

module.exports = mongoose.model('user', UserSchema)