const authGuard = require("../services/authGuard");
module.exports = function(app, passport, users) {
  //public
  //GET
  app.get("/category", authGuard.checkAuthenticated, (req, res) => {
    res.render("category");
  });
  app.get("/newcategory", authGuard.checkAuthenticated, (req, res) => {
    res.render("newcategory");
  });
  //POST
};
