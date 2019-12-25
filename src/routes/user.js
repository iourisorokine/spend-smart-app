const express = require('express')
const User = require("../models/User");

const router=express.Router()

// GET a user by user name
router.get("/:userName",(req,res)=>{
    const userName = req.params.userName;
    console.log(req.params);
    User.find({ username: userName })
      .then(found => {
        if (!found){
            return res.json({message: "no user corresponds to that name"})
        }
        if (found) {
          return res.json({found, message:"The user has been added"});
        }
    }).catch(err => {
        res.json(err);
      })
});

module.exports = router