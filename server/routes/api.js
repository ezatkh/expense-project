const express = require("express");
const router = express.Router();
const Expense = require("../../model/Expense");
const moment = require("moment");

router.get("/expense", function (request, response) {
  Expense.find({})
    .sort({ date: -1 })
    .exec(function (err, expenses) {
      response.send(expenses);
    });
});

router.post("/expense", function (request, response) {
  let expenseParameter = request.body;

  expenseParameter.date
    ? (expenseParameter.date = moment(expenseParameter.date).format("LLLL"))
    : (expenseParameter.date = moment().format("LLLL"));

  const expenseInstance = new Expense(expenseParameter);
  expenseInstance.save().then(function (err, result) {
    console.log(
      `the amount of the expense is :${expenseParameter.amount} and you spent your money on: ${expenseParameter.item}`
    );
  });

  response.send(expenseInstance);
});

router.put("/update", function (request, response) {
  const group1 = request.body.group1;
  const group2 = request.body.group2;

  Expense.findOneAndUpdate(
    { group: group1 },
    { group: group2 },
    { new: true }
  ).exec(function (err, expense) {
    response.send(expense);
  });
});

module.exports = router;
