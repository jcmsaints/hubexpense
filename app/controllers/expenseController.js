const authGuard = require("../services/authGuard");
module.exports = function(app, passport, users) {
  //GET

  app.get("/expense", authGuard.checkAuthenticated, (req, res) => {
    res.render("expense");
  });
  app.get("/newexpense", authGuard.checkAuthenticated, (req, res) => {
    res.render("newexpense");
  });

  //POST
};
