const express = require("express");
const router = express.Router();
const Budget = require("../models/Budget");
const Spend = require("../models/Spend");


// POST /api/budget
// create a new `udget` resource
router.post("/", (req, res) => {
    const name = req.body.name;
    const owner = req.user._id;
    const participants= req.body.participants
  
    Budget.create({
      name,
      owner,
      participants
    })
      .then(budget => {
        res.json(budget);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //GET all budgets
  router.get("/", (req, res) => {
    Budget.find()
      .populate("spends")
      .then(budgets => {
        res.json(budgets);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //GET budget by id
  router.get("/:id", (req, res) => {
    // check if req.params.id is valid, if not respond with a 4xx status code
    Budget.findById(req.params.id)
      .populate("spends")
      .then(budget => {
        if (!budget) {
          res.status(404).json(budget);
        } else {
          res.json(budget);
        }
      })
      .catch(err => {
        res.json(err);
      });
  });


module.exports=router