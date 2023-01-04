const  Router  = require("express").Router();
const UserRouter = require('./UserRouter')
const CardRouter = require('./CardRouter')
const ListRouter = require('./ListRouter')
const CardListRouter = require('./CardListRouter')

Router.use('/users', UserRouter)
Router.use('/lists', ListRouter )
Router.use('/cards', CardRouter)
Router.use('/edit', CardListRouter)

module.exports = Router