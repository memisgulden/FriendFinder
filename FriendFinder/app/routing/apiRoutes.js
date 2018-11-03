var friends = require("../data/friends");

module.exports = function(app) {


  app.get("/data/friends", function(req, res) {
    return res.json(friends);
  });


  app.post("/data/newFriends", function(req, res) {

   console.log("New friends added");
   friends.push(req.body);
   res.json(true);
  
  });


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = [];

    res.json({ ok: true });
  });

  app.get("/routing/apiRoutes.js", function(req, res) {
    return res.json(friends);

  });
  
};




