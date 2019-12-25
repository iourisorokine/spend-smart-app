const express = require("express");
const router = express.Router();
const Budget = require("../models/Budget");
const Spend = require("../models/Spend");

// POST /api/budget
// create a new `udget` resource
router.post("/", (req, res) => {
  console.log(req.body);
  const owner = req.user._id;
  const { name, description, participants } = req.body;
  participants.push(owner)

  Budget.create({
    name,
    description,
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

// GET budgets with a certain user id
router.get("/user/:userId", (req, res) => {
  const userId = req.params.userId;
  console.log(req.params);
  Budget.find({ owner: userId })
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

//PUT modify the budget
router.put("/:id", (req, res) => {
  // check if req.params.id is valid, if not respond with a 4xx status code
  const { name, description } = req.body;
  Budget.findByIdAndUpdate(req.params.id, {
    name,
    description
  })
    .then(budget => {
      if (!budget) {
        res.status(404).json(budget);
      } else {
        console.log(budget)
        res.json(budget);
      }
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  const budgetId = req.params.id;
  Budget.findByIdAndDelete(budgetId)
    .then(() => {
      return res.json({message: "ok"});
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
