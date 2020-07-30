"use strict"

const {Cart, User, Product} = require('../models')

class CartController {
    static addCart(req, res, next) {
        const userId = req.userData.id
        const newCart = {
            UserId: userId,
            ProductId: req.params.productId,
            quantity: req.body.quantity
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
    static getCartId(req, res, next) {
        const id = +req.params.id
        Cart.findByPk(id)
        .then(function(data){
            if(!data) {
                throw {
                    name: "Validation_error",
                    statusCode: 404,
                    message: `Cart with ID: ${id} is not found!`
                }
            }
            else {
                return res.status(200).json(data)
            }
        })
        .catch(function(err){
            next(err)
        })
    }
    static editCart (req, res, next) {
        const id = +req.params.id
        let updateCart =  {
            quantity: req.body.quantity
        }
        Cart.update(updateCart, {where: {id}})
        .then(function(data){
            if (data[0] === 1) {
                return res.status(200).json({message: 'Succesfully Updated Cart!'})
            } else {
                throw {
                    name: "Validation_error",
                    statusCode: 404,
                    message: `Cart is not found!`
                }
            }
        })
        .catch(function(err){
            next(err)
        })
    }
    static deleteCart(req, res, next) {
        const id = +req.params.id
        Cart.destroy({
            where: {id}
        })
        .then(function(data){
            if(data) {
                return res.status(200).json({message: 'Successfully Deleted Chart!'})
            } else {
                throw {
                    name: "Validation_error",
                    statusCode: 404,
                    message: `Cart with ID: ${id} is not found!`
                }
            }
        })
        .catch(function(err){
            next(err)
        })
    }
}

module.exports = CartController