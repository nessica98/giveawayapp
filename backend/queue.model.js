const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const queueSchema = new Schema({
  queue_code: {
    type: String,
    unique: true
  },
  queue_user: String,      // attended user 
  queue_isrecive: Number, // 0 no ; 1 yes
  queue_giveawaypic: String,
  queue_giveawayName: String 
  

},{versionKey:false});

const queue = mongoose.model('queue', queueSchema);
module.exports = queue;