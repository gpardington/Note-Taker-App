//Declare dependencies
var express = require("express");

//Set up the Express app and declare the port
var app = express ();
var PORT = process.env.PORT || 8080;

//Configure data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Give access to public folder from front end
app.use(express.static('public'));

//Routing
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

//Listener - Starts Server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});