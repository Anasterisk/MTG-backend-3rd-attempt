const Router = require('express').Router()
const controller = require('../controllers/UserControllers')

Router.get('/', controller.GetAllUserProfile)
Router.get('/:userId', controller.GetIndividualUserProfile)
Router.post('/register', controller.CreateNewUser)
Router.post('/login', controller.Login)
Router.delete('/delete/:userId', controller.DeleteAccount)

module.exports = Router