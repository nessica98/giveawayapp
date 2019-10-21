const router = require('express').Router();
let Giveaway = require('./giveaway.model');

router.route('/').get((req, res) => {
  Giveaway.find()
    .then(giveaways => res.json(giveaways))
    .catch(err => res.status(400).json('Error: ' + err));
    console.log('dd')

});

router.route('/add').post((req, res) => {
  //const giveawayname = req.body.giveawayname;
  //const giveaway_room = req.body.giveaway_room;
  const giveaway = 
  {giveawayname:req.body.giveawayname,
  giveaway_room:req.body.giveaway_room,
  giveaway_givername:req.body.giveaway_givername,
  giveaway_status:req.body.giveawaystatus}
    console.log(req.body);
  const newGW = new Giveaway(giveaway);
  
  newGW.save()
    .then(() => res.json('GW added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;