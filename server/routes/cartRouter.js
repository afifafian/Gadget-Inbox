"use strict"

const routes = require('express').Router();
const CartController = require('../controllers/CartController')
const {authentication} = require('../middlewares/auth')

routes.get('/', authentication, CartController.showCart)
routes.post('/:productId', authentication, CartController.addCart)
routes.get('/:id', authentication, CartController.getCartId)
routes.put('/:id', authentication, CartController.editCart)
routes.delete('/:id', authentication, CartController.deleteCart)

module.exports = routes