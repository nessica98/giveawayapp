const mongoose = require('mongoose')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
require('../user.model')

const Users = mongoose.model('User')

passport.use(new localStrategy({ userField: user , password:password}, (email,password,cb)=>{
    // db call and return jwt object
    Users.findOne({user}).then((user)=>{
        if(!user || !user.validatePassword(password)){
            return cb(null,false, {error:{'email or password':'is invalid'}})
        }
    })

    return 
}))