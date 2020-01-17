const authGuard = require("../services/authGuard");
const User = require("../dtos/user.js");
const postRequest = require("../services/postRequest");
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
    function resolve(data) {
      res.redirect("/login");
    }
    function reject(data) {
      console.log(data);
    }
    let user = new User(req.body);
    users.push(user);
    postRequest.postService("auth/local/register", user, resolve, reject);
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
