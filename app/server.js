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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
