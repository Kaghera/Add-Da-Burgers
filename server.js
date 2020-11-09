// Server
const express = require("express"); 
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express(); 

// Port for Express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
const routes = require("./controllers/burgersController.js");
app.use("/", routes);

// Start Server
app.listen(process.env.PORT || 8080, function() {
  console.log("App listening on PORT 8080");
});
