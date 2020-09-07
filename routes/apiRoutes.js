//Declare dependencies and file manipulation
const notesData = require("../db/db.json");
const path = require("path");
const fs = require("fs");

//API get requests and routing
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(notesData);
      });
    //API post requests
    app.post("/api/notes", function(req, res) {
    });
    app.delete("/api/notes", function(req, res) {    
    });
};