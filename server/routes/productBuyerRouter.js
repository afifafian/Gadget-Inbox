"use strict"

const routes = require('express').Router();
const ProductController = require('../controllers/ProductController')

routes.get('/', ProductController.show)

module.exports = routes