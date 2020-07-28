"use strict"

const routes = require('express').Router();
const ProductController = require('../controllers/ProductController')
const {authentication} = require('../middlewares/auth')

routes.get('/', authentication, ProductController.show)

module.exports = routes