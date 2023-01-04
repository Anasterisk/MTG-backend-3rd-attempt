const Router = require('express').Router()
const controller = require('../controllers/CardControllers')

Router.get('/', controller.GetAllCards)
Router.get('/:card_Id', controller.GetCardDetail)
Router.post('/submit', controller.CreateCard)
Router.delete('/:card_id', controller.DeleteCard)
Router.put('/edit/:card_id', controller.UpdateCard)

module.exports = Router