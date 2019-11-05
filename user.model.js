const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  twittername: String
});


/*
//Crypto part ignore it
userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt,10000,512,'sha512').toString('hex');
}
//Crypto part ignore it
userSchema.methods.validatePassword = function(password) {

  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');

  return this.hash === hash;

};*/


userSchema.methods.generateJWT = function(password) {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60)

  return jwt.sign({
    username: this.username,
    twittername: this.twittername,
    exp: parseInt(expirationDate.getTime() / 1000, 10)
  },'secret');
}

userSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    username: this.username,
    token: this.generateJWT()
  }
}

const User = mongoose.model('User', userSchema);

module.exports = User;
