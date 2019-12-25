const express = require('express')
const User = require("../models/User");

const router=express.Router()

// GET a user by user name
router.get("/:userName",(req,res)=>{
    const userName = req.params.userName;
    console.log(req.params);
    User.find({ username: userName })
      .then(found => {
        console.log("#####Found:",found)
        if (!found.length){
            return res.json({message: "no user corresponds to that name"})
        }
        else if (found.length) {
          return res.json({found, message:"The user has been added"});
        }
    }).catch(err => {
        res.json(err);
      })
});

module.exports = router