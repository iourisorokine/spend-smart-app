const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const budgetSchema = new Schema({
  name: String,
  description: String,
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  spends: [{ type: Schema.Types.ObjectId, ref: "Spend" }]
});

const Budget = model("Budget", budgetSchema);

module.exports = Budget;
