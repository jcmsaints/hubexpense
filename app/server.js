const express = require("express");
const app = express();
const port = 3000;
let expressLayouts = require("express-ejs-layouts");
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/expense", (req, res) => {
  res.render("expense");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/newexpense", (req, res) => {
  res.render("newexpense");
});
app.get("/category", (req, res) => {
  res.render("category");
});
app.get("/newcategory", (req, res) => {
  res.render("newcategory");
});
app.get("/account", (req, res) => {
  res.render("account");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
