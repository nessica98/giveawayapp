const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GWSchema = new Schema({
  giveawayname: {
    type: Intl,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  giveaway_room: String,
  giveaway_givername: String,
  giveaway_status: Number,
  giveaway_pic: String,
  giveaway_userannounce: Array
});

const giveaway = mongoose.model('giveaway', GWSchema);
module.exports = giveaway;