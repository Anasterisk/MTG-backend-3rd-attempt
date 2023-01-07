const Router = require('express').Router()
const controller = require('../controllers/CardListControllers')

// /edit/add?list_id=x&card_id=y
Router.post('/add', controller.AddCard)
// /edit/remove?list_id=x&card_id=y
Router.delete('/remove', controller.RemoveCard)

module.exports = Router