const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

module.exports.auth = async (req, res, next) => {
    try {
        const token = req.header('x-auth-token')
        if(!token) return res.status(401).json({ error: 'Unauthorized Access!' })
        const jwtSecret = process.env.JWT_SECRET
        const decoded = jwt.verify(token, jwtSecret)
        const user = await User.findById(decoded._id)
        if(!user) return res.status(401).json({ error: 'Unauthorized Access!' })
        req.user = user
        next()
    } catch(err) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized Access!'
        })
    }
}