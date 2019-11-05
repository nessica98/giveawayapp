const router = require('express').Router();
let Queue = require('./queue.model');
let Giveaway = require('./giveaway.model');
let uuidv1 = require('uuid/v1')

router.route('/').get((req, res) => {
    ////            select .*
    Queue.find()
    .then(queue => res.json(queue))
    .catch(err => res.status(400).json('Error: ' + err));
    //console.log('dd')
});

/////////////////////////////////////////////////////////////////////////////////////////

router.route('/user/:username').get(async(req, res) => {
    
    ////            Get data from URL
    let user = await req.params.username
    ////            qurry for attended event for user
    let queue = await Queue.find({ queue_user: user })
<<<<<<< HEAD
    console.log(user)
    
    console.log(queue)
    res.json(queue)
    console.log('dd')
=======
    //console.log(user)
    
    res.json(queue)
    //console.log('dd')
>>>>>>> 50ad2aacf2667b1443a05636c28132e4d30d1a47
});

/////////////////////////////////////////////////////////////////////////////////////////

router.route('/add').post(async (req, res) => {
    let id = uuidv1();
<<<<<<< HEAD
     console.log(id)
=======
    //console.log(id)
>>>>>>> 50ad2aacf2667b1443a05636c28132e4d30d1a47
    ////            Get data from body
    let user = req.body.username
    //console.log(user)
    let giveawayname = await req.body.giveawayname
    //console.log(giveawayname)  
    // Giver can't be reciever
    let giveawayfromuser = await Giveaway.find({giveaway_givername:user})
    let giveawayfromuser_filt = giveawayfromuser.filter((gw)=>{return gw.giveawayname == giveawayname})
    
    if(giveawayfromuser_filt.length > 0){
        res.send({error:"Giver can't be reciever"})
        return;
    }

    // Reciever can recieve only one each reciever
    let QbyReciever = await Queue.find({queue_user:user,queue_giveawayName:giveawayname})
<<<<<<< HEAD
    console.log(QbyReciever)
=======
    //console.log(QbyReciever)
>>>>>>> 50ad2aacf2667b1443a05636c28132e4d30d1a47
    if(QbyReciever.length > 0){
        res.send({error:"Already Queue"})
        return;
    }
    
    Giveaway.find({giveawayname:giveawayname},(err,dd)=>{
        let data = dd[0]
        if(data.giveaway_status == 1 ){
            data.giveaway_amount = data.giveaway_amount-1
            //console.log(giveaway.giveaway_amount-0)
            if(data.giveaway_amount==0){
                data.giveaway_status = 0
            }
        const amount_after = data.giveaway_amount
        const status_after = data.giveaway_status
<<<<<<< HEAD
        console.log(data)
=======
>>>>>>> 50ad2aacf2667b1443a05636c28132e4d30d1a47
        Giveaway.updateOne({giveawayname:giveawayname},{giveaway_amount:amount_after,giveaway_status:status_after},(err)=>{
            const queue = {
                queue_code:id,
                queue_user:user,
                queue_isreceived:0,
                queue_giveawayName:data.giveawayname,
                            
                }
            
<<<<<<< HEAD
                console.log(queue)
            
                const newQueue =  new Queue(queue);
                //console.log(queue)
=======

            
                const newQueue =  new Queue(queue);
>>>>>>> 50ad2aacf2667b1443a05636c28132e4d30d1a47
                newQueue.save().then(() => res.json('GW added!'))
                .catch(err => res.status(400).json('Error: ' + err));
                
        })
        
        //const bb = await Giveaway.find({giveawayname:giveawayname})
<<<<<<< HEAD
        //console.log(bb)
=======
>>>>>>> 50ad2aacf2667b1443a05636c28132e4d30d1a47
        //res.send()
        
        }
    
        else{
            res.json('Queue Full')
        }
    })
    ////            qurry for attended event for user
    let giveaway = await Giveaway.find({giveawayname:giveawayname})
    giveaway = await giveaway[0]
<<<<<<< HEAD
    console.log(giveaway)
=======
    //console.log(giveaway)
>>>>>>> 50ad2aacf2667b1443a05636c28132e4d30d1a47
    

    
});

/////////////////////////////////////////////////////////////////////////////////////////////

//                  recive one by one

router.route('/ReciveItem').get((req, res) => {
    ////            Get data from body
    let user = req.body.username
    let giveaway = req.body.giveawayname

    Queue.findOneAndUpdate({giveawayname:giveaway.giveawayname,user:user},{isrecive:1})
    .then(queue => res.json(queue))
    .catch(err => res.status(400).json('Error: ' + err));
<<<<<<< HEAD
    console.log('dd')
=======
    //console.log('dd')
>>>>>>> 50ad2aacf2667b1443a05636c28132e4d30d1a47
});
///

router.route('/giveaway/:giveaway').get(async(req, res) => {
    
    ////            Get data from URL
    let giveaway = await req.params.giveaway
    ////            qurry for attended event for user
    let queue = await Queue.find({ queue_giveawayName: giveaway })
<<<<<<< HEAD
    console.log(giveaway)
    
    console.log(queue)
    res.json(queue)
    console.log('dd')
=======
    //console.log(giveaway)
    
    //console.log(queue)
    res.json(queue)
    //console.log('dd')
>>>>>>> 50ad2aacf2667b1443a05636c28132e4d30d1a47
});

///////////////////////////////////////////////////////////////////////////////////////////////

<<<<<<< HEAD
router.route('/AFuckingSecretRouteForAdminTest/delete').post(async (req, res) => {
    ////            Get data from body
    let user = await req.body.username
    console.log(user)
    let giveawayname = await req.body.giveawayname
    console.log(giveawayname)

    ////            qurry for attended event for user
    let giveaway = await Giveaway.find({giveawayname:giveawayname})
    giveaway = giveaway[0]
    console.log(giveaway.giveaway_amount)
    if(giveaway.giveaway_status == 1 ){
        giveaway.giveaway_amount = await giveaway.giveaway_amount-1
        if(giveaway.giveaway_amount==0){
            giveaway.giveaway_status =2
        }
    }
    Giveaway.findOneAndDelete({giveawayname:giveawayname},giveaway)

});
=======
>>>>>>> 50ad2aacf2667b1443a05636c28132e4d30d1a47
  module.exports = router;