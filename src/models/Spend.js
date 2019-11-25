const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const spendSchema = new Schema({
    name: String,
    date: Date,
    amount: Number,
    category: {
        type: String,
        enum: ["Food", "Accomodation", "Drinks", "Leisure", "Clothes", "Culture", "Transport"]
      },
    budget: { type: Schema.Types.ObjectId, ref: "Budget" }
})

const Spend=model("Spend", spendSchema);

module.exports = Spend;