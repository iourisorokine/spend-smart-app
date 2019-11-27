const express = require("express");
const Spend = require("../models/Spend");
const Budget = require("../models/Budget");
const router = express.Router();

//POST request to create a new spend
router.post("/", (req, res) => {
  const { name, date, amount, category, budgetId } = req.body;

  Spend.create({
    name,
    date,
    amount,
    category,
    budget: budgetId
  })
    .then(spend => {
      return Budget.findByIdAndUpdate(budgetId, {
        $push: { spends: spend._id }
      }).then(() => {
        res.json({
          message: `Spend with id ${spend._id} was successfully added to project with id ${budgetId}`
        });
      });
    })
    .catch(err => {
      res.json(err);
    });
});

//GET request to get all the spends
router.get("/", (req, res) => {
  Spend.find()
    .then(spends => {
      res.json(spends);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT request to update one spend
router.put("/:id", (req, res) => {
  const spendId = req.params.id;
  const { name, date, amount, category } = req.body;
  Spend.findByIdAndUpdate(
    spendId,
    {
      name,
      date,
      amount,
      category
    },
    { new: true }
  )
    .then(spends => {
      res.json(spends);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/:id", (req, res) => {
  const spendId = req.params.id;
  Spend.findByIdAndDelete(spendId)
    .then(spend => {
      return res.json({message: "ok"});
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
