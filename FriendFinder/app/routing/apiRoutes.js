var friends = require("../data/friends");

module.exports = function(app) {


  app.get("/data/friends", function(req, res) {
    return res.json(friends);
  });


  app.post("/data/newFriends", function(req, res) {

   console.log("New friends added");
   console.log(req.body);
   friends.push(req.body);
  
  });

  app.get("/routing/apiRoutes.js", function(req, res) {
    return res.json(friends);

  });
  
};




