const express = require('express');
const router = express.Router();
// const User = require('../src/models/user');
const User = require('../models/user');

router.post('/users', async (req, res) => {
  const user = new User(req.body);    
    try{
      console.log(req.body);
      user.save();
      res.send(user);
    } catch(e){
       res.status(400).send(e);
   }
});

router.get('/users', async (req, res) => {
  try{
    const user = await User.find();
    res.send(user);
  }catch(e){
    res.status(500).send(e);
  }
});

module.exports = router;
