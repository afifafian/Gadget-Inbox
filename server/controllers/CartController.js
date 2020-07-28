"use strict"

const {Cart, User, Product} = require('../models')

class CartController {
    static addCart(req, res, next) {
        const userId = req.userData.id
        const newCart = {
            UserId: userId,
            ProductId: req.params.productId
        }
        Cart.create(newCart)
        .then(function(data){
            return res.status(201).json(data)
        })
        .catch(function(err){
            next(err)            
        })        
    }
    static showCart(req, res, next) {
        Cart.findAll({
            where: {UserId: req.userData.id},
            include: [Product]
        })
        .then(function(data){
            return res.status(200).json(data)
        })
        .catch(function(err){
            next(err)
        })
    }
}

module.exports = CartController