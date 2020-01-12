module.exports = function(app, passport, users) {
  //public
  //POST
  app.post(
    "/login",
    checkNotAuthenticated,
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/login",
      failureFlash: true
    })
  );
  app.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/login");
  });
  app.post("/register", async (req, res) => {
    console.log("OLA");
    console.log(req.body);
    console.log(req.body.name);
    users.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    console.log(users);
    res.redirect("/login");
  });
  //GET
  app.get("/register", (req, res) => {
    res.render("register");
  });
  app.get("/login", (req, res) => {
    res.render("login");
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
