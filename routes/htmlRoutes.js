//Declare dependencies
const path = require("path");

//Routing
module.exports = function(app) {
    //HTML get request routes
    //Responds with home page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "..public/index.html"));
    });
    //Respons with notes page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "..public/notes.html"));
    });
};