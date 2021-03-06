module.exports = function(app, passport, users) {
  //public
  //POST
  //Auth
  app.post(
    "/login",
    checkNotAuthenticated,
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true
    })
  );
  app.post("/register", async (req, res) => {
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    res.redirect("/login");
  });
  //GET
  //Auth
  app.get("/register", (req, res) => {
    res.render("register");
  });
  app.get("/login", (req, res) => {
    res.render("login");
  });
  app.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/login");
  });
  //protected by auth
  app.get("/", checkAuthenticated, (req, res) => {
    res.render("home");
  });
  app.get("/expense", checkAuthenticated, (req, res) => {
    res.render("expense");
  });
  app.get("/newexpense", checkAuthenticated, (req, res) => {
    res.render("newexpense");
  });
  app.get("/category", checkAuthenticated, (req, res) => {
    res.render("category");
  });
  app.get("/newcategory", checkAuthenticated, (req, res) => {
    res.render("newcategory");
  });
  app.get("/account", checkAuthenticated, (req, res) => {
    res.render("account");
  });

  //Utils Auth Functions
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }

    res.redirect("/login");
  }

  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect("/");
    }
    next();
  }
};
