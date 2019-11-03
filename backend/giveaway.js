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

  //check login if not login return 403

  //
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

//show giveaways each user
router.route('/:username').get((req,res)=>{
  const username = req.params.username
  Giveaway.find({giveaway_givername:username},(err,res)=>{
    if(err) throw err
    console.log(res)
  }).then(giveaway => {res.json(giveaway)})
})

// updatestatus of each giveaway
router.route('/managestatus').put((req,res)=>{
  //data given in form {giveawayname , newStatus}
  console.log('put request')
  const {giveawayname, newStatus} = req.body;
  //Updateindatabase
  Giveaway.findOneAndUpdate({giveawayname:giveawayname},{
    giveaway_status: newStatus
  },(err,doc)=>{
    if(err) throw err
    res.send("update ok")
  })
});


// u
module.exports = router;