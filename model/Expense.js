const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const data = require("./data");

const expenseSchema = new Schema({
  item: String,
  date: Date,
  amount: Number,
  group: String,
});
const Expense = mongoose.model("Expense", expenseSchema);

// data.forEach((expence) => {
//   let itemInstance = new Expense({
//     item: expence.item,
//     amount: expence.amount,
//     date: expence.date,
//     group: expence.group,
//   });
//   itemInstance.save();
// });
module.exports = Expense;
