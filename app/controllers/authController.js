const authGuard = require("../services/authGuard");
const User = require("../dtos/user.js");
module.exports = function(app, passport, users) {
  //public
  //POST
  //Auth
  app.post(
    "/login",
    authGuard.checkNotAuthenticated,
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true
    })
  );
  app.post("/register", async (req, res) => {
    users.push(new User(req.body));
    console.log(users);
    res.redirect("/login");
  });
  //GET
  //Auth
  app.get("/register", authGuard.checkNotAuthenticated, (req, res) => {
    res.render("register");
  });
  app.get("/login", authGuard.checkNotAuthenticated, (req, res) => {
    res.render("login");
  });
  app.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/login");
  });
};
