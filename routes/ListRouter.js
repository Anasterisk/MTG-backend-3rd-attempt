const Router = require('express').Router()
const controller = require('../controllers/ListControllers')

Router.get('/:list_id', controller.GetDeck)
Router.post('/:user_id', controller.CreateNewList)
Router.delete('/:list_id', controller.DeleteList)
Router.put('/:list_id', controller.UpdateList)

module.exports = Router