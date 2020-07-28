"use strict"

const routes = require('express').Router();
const CartController = require('../controllers/CartController')
const {authentication} = require('../middlewares/auth')

routes.get('/', authentication, CartController.showCart)
routes.post('/:productId', authentication, CartController.addCart)

module.exports = routes