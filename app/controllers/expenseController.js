const authGuard = require("../services/authGuard");
const Expense = require("../dtos/expense");
const getRequest = require("../services/getRequest");
const postRequest = require("../services/postRequest");
module.exports = function(app, passport, users) {
  //GET
  app.get("/expense", authGuard.checkAuthenticated, (req, res) => {
    function resolveExpense(data) {
      let expenseList = [];
      for (item in data) {
        expenseList.push(new Expense(data[item]));
      }
      let headerList = [
        { label: "Tipo de Despesa", id: "categoryName" },
        { label: "Valor", id: "value" },
        { label: "Descrição", id: "description" },
        { label: "Foto", id: "imagePath" }
      ];

      console.log(expenseList);
      res.render("expense", {
        headerList: headerList,
        expenseList: expenseList
      });
    }
    function rejectExpense(data) {
      console.log(data);
    }

    getRequest.findAll("expenses", "", resolveExpense, rejectExpense);
  });
  app.get("/newexpense", authGuard.checkAuthenticated, (req, res) => {
    function resolve(data) {
      let categoryList = [];
      for (item in data) {
        categoryList.push(new Category(data[item]));
      }

      console.log(categoryList);
      res.render("newexpense", {
        categoryList: categoryList
      });
    }
    function reject(data) {
      console.log(data);
    }
    getRequest.findAll("expenses", "", resolve, reject);
  });

  //POST
  app.post("/newexpense", async (req, res) => {
    let data = users.push(new User(req.body));
    console.log(users);
    res.redirect("/login");
  });

  postRequest;
};
