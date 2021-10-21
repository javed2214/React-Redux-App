const User = require('../models/UserModel')

module.exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if(!username || !email || !password) return res.json({ error: 'Please fill All the Fields!' })
        let user = await User.findOne({ email: email })
        if(user) return res.json({ error: 'User Already Exists!' })
        user = await User.create({
            username, email, password
        })
        const token = await user.getSignedToken()
        return res.status(201).json({
            success: true,
            user,
            token
        })

    } catch(err) {
        console.log(err)
        return res.json({
            success: false,
            error: 'Internal Server Error'
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        if(!email || !password) return res.json({ error: 'Please fill all the Fields!' })
        let user = await User.findOne({ email })
        if(!user) return res.json({ error: 'Invalid Credentials' })
        const isValidPassword = await user.comparePassword(password)
        if(!isValidPassword) return res.json({ error: 'Entered Wrong Password!' })
        const token = await user.getSignedToken()
        return res.status(200).json({
            success: true,
            user,
            token
        })
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        })
    }
}

module.exports.getUsers = async (req, res) => {
    const users = await User.find({})
    return users
}