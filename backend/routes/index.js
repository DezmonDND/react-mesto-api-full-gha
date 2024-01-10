const routes = require('express').Router();
const cardsRouter = require('./cards');
const usersRouter = require('./users');
const auth = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { loginValidation, createUserValidation } = require('../middlewares/validationJoi');

routes.use('/users', auth, usersRouter);
routes.use('/cards', auth, cardsRouter);
routes.post('/signin', loginValidation, login);
routes.post('/signup', createUserValidation, createUser);

module.exports = routes;
