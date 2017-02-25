var Article = require('../models/Article.js');
var Note = require('../models/Note.js');
var Search = require('../models/Search.js');
//Other route Functions

//routes themselves

module.exports = function(app){

  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });

  //Saved
  //We will call this route the moment our page gets rendered
  app.get("/api/saved", function(req, res) {

    // We will find all the records, sort it in descending order, then limit the records to 5
    Article.find({}).sort([
      ["date", "descending"]
    ]).limit(5).populate("note")
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  });

  //Save a search
  app.post("/api/search", function(req, res) {
    console.log("BODY: " + req.body.title);

    Article.create({
      title: req.body.title,
      date: Date.now()
    }, function(err) {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Saved Search");
      }
    });
  });

//Adding a note to an existing article in the saved article history
  app.post("/api/article/:id", function(req, res){
    var newNote = new Note(req.body);

    newNote.save(function(err, doc){
      if (err){
        console.log(err);
      }
      else{
        Article.findOneAndUpdate({"_id": req.params.id}, {$push: {"note": doc._id}}, {new: true})
        .exec(function(err, doc){
          if (err){
            console.log("Error saving note: " + err);
          }
          else{
            res.send(doc);
          }
        })
      }
    })
  })


}
