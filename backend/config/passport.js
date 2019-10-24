const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
require('../user.model')
//let Users = require('./user.model')

const Users = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'users[username]',
    passwordField: 'users[password]'
}, (email, password, done) => {
    Users.findOne({email}).then((user)=> {
        if(!user || !user.validatePassword(password)){
            return done(null, false, {error: {'email or password': 'is invalid'}});
        }

        return done(null, user);
    }).catch(done)
}))