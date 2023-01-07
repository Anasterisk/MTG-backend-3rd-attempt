const Router = require('express').Router()
const controller = require('../controllers/UserControllers')

Router.get('/', controller.GetAllUserProfile)
Router.get('/get/:userId', controller.GetIndividualUserProfile)
Router.post('/register', controller.CreateNewUser)
Router.get('/login', controller.Login)
Router.get('/login/bypass', controller.LoginBypass)
Router.delete('/delete/:userId', controller.DeleteAccount)

module.exports = Router