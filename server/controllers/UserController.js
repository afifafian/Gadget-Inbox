"use strict"

const {User} = require('../models')
const bcrypt = require('bcrypt')
const {jwtSign, jwtVerify} = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        const newUser = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }
        User.create(newUser)
        .then(function(data){
            return res.status(201).json(data)
        })
        .catch(function(err){
            next(err)
        })
    }
    static login (req, res, next) {
        const email = req.body.email
        const password = req.body.password
        
        User.findOne({
            where: {email}
        })
        .then(function(data){
            if(!data) {
                throw {
                    name: "Validation_error",
                    statusCode: 404,
                    message: 'Data not found!'
                }
            } else if (data && !bcrypt.compareSync(password, data.password)) {
                throw {
                    name: "Validation_error",
                    statusCode: 400,
                    message: "Incorrect Email or Password!",
                }
            } else if (data && bcrypt.compareSync(password, data.password)) {
                const token = jwtSign({ 
                    id: data.id, email: data.email, role: data.role
                })
                return res.status(200).json({
                    id: data.id,
                    email: data.email,
                    access_token: token
                })    
            }
        })
        .catch(function(err){
            // console.log(err)
            next(err)
        })
    }
}

module.exports = UserController