const Todo = require('../models/TodoModel')

module.exports.addTodo = async (req, res) => {
    try {
        let { todo } = req.body
        if(!todo) return res.json({ error: 'Todo Cannot be Empty!' })
        let user = req.user
        todo = await Todo.create({ todo, user })
        return res.status(201).json({
            success: true,
            todo
        })
    } catch(err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            error: 'Internal Server Error'
        })
    }
}