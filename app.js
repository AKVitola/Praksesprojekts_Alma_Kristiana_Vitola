const express = require("express"),
  path = require("path"),
  ejs = require("ejs");

const app = express();

// Require static assets from assets folder
app.use(express.static(path.join(__dirname, "/assets/")));

// set the view engine as html
app.engine(".html", require("ejs").renderFile);
app.set("view engine", "html");

// Set 'views' directory for any views being rendered res.render()
// app.set("views", path.join(__dirname, ""));

// Port website will run on
app.listen(3000);

// *** GET Routes - display pages ***

// Root Route
app.get("/", function (req, res) {
  res.render("index");
});

app.get("/ideja", function (req, res) {
  res.render("ideja");
});

app.get("/piesaki_sapni", function (req, res) {
  res.render("piesaki_sapni");
});

app.get("/uznemejiem", function (req, res) {
  res.render("uznemejiem");
});

app.get("/sapnu_banka", function (req, res) {
  res.render("sapnu_banka");
});

app.get("/sapnus_atbalsta", function (req, res) {
  res.render("sapnus_atbalsta");
});

app.get('/iedvesmas_stasti', function (req, res) {
  res.render('iedvesmas_stasti');
});
