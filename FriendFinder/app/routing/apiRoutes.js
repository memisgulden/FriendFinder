var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/data/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/data/friends", function(req, res) {

    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    }
    else {
      friends.push(req.body);
      res.json(false);
    }
  });


  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = [];

    res.json({ ok: true });
  });
};
