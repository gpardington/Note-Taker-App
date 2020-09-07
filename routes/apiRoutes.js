//Declare dependencies and file manipulation
let db = require("../db/db.json");
const fs = require('fs');

//Functions
//re-index data array
function reindexDB(dbArray){
    let newDB = [];
    for (let i = 0; i < dbArray.length; i++) {
      let reIndexedNote = dbArray[i];
      reIndexedNote.id = i + 1;
      newDB[i] = reIndexedNote;
    }
    return newDB;
  }
  //save data array to db.json
  function writeDB(dbArray){
    fs.writeFile("./db/db.json", JSON.stringify(dbArray), function (err) {
      if (err) throw err;
    });
  }

//API get requests and routing
module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        res.json(db);
      });
    //API post requests
    app.post("/api/notes", function(req, res) {
        //New note from request
        const newNote = req.body;
        //Add new note to db array
        db.push(newNote);
        //Rewrite db array to the json file
        db = reindexDB(db);
        //Save db array with new indexes
        writeDB(db);
        //Respond with the new note
        res.json(newNote);
    });

    //API Delete request route
    app.delete("/api/notes/:id", function(req, res) {
        //Delete note id from request
        const deletedNoteID = req.params.id;
        //Remove the note from the db array and return it to the new array
        const deletedNote = db.splice(deletedNoteID-1, 1);
        //Rewrite db array with new indexes
        db = reindexDB(db);
        //Write newDB array to disk
        writeDB(db);
        //Send response with deleted note
        res.json(deletedNote);    
    });
};