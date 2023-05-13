const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const users = require('./modules/users')
const todos = require('./modules/todos')

router.use('/', home)
router.use('/todos', todos)
router.use('/users', users)

module.exports = router