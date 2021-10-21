const express = require('express')
const router = express.Router()
const { auth } = require('../middleware/auth')
const { addTodo } = require('../controllers/todoController')

router.route('/addtodo').post(auth, addTodo)

module.exports = router