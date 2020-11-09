// Server
const express = require("express"); 
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
// Initalise Express Server
const app = express(); 

// Port for Express
let PORT = process.env.PORT || 8080; 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
const routes = require("./controllers/burgersController.js");
app.use("/", routes);

// Start Server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
