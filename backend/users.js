const router = require('express').Router();
let User = require('./user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
    console.log('dd')
  

});

router.route('/add').post((req, res) => {
  const user = req.body;

  const newUser = new User(user);
  
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req,res) => {
    const {user,password} = req.body
    console.log(req.body)
    User.find
    ({'username':{$eq:user}}).then((data)=>{console.log(data)})
})

module.exports = router;