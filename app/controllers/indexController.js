const authGuard = require("../services/authGuard");

module.exports = function(app, passport, users) {
  app.get("/", authGuard.checkAuthenticated, (req, res) => {
    res.render("home");
  });
};
