const express = require("express");
const app = express();
const port = 80;
const passport = require("passport");
const users = [];
const flash = require("express-flash");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const initializePassport = require("./config/passport-config");
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
require("./routes/index.js")(app, passport, users);
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
);
app.listen(port, () => console.log(`A app está a correr no porto ${port}!`));
