const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const spendSchema = new Schema({
    name: String,
    date: Date,
    amount: Number,
    category: String,
    budget: { type: Schema.Types.ObjectId, ref: "Budget" }
})

const Spend=model("Spend", spendSchema);

module.exports = Spend;