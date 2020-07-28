"use strict"

const routes = require('express').Router();
const userRouter = require('../routes/userRouter')
const productRouter = require('../routes/productRouter')
const cartRouter = require('../routes/cartRouter')
const productBuyerRouter = require('../routes/productBuyerRouter')

routes.use('/users', userRouter)
routes.use('/products', productRouter)
routes.use('/productsbuyer', productBuyerRouter)
routes.use('/cart', cartRouter)

module.exports = routes