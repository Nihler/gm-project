const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");

const app = express();

app.set("view engine", "ejs"); //dodanie template engine

app.use(bodyParser.urlencoded()); //służy do parsowania requestow
app.use(express.static(path.join(__dirname, "public")));
app.use(adminRoutes);

app.listen(3000);
