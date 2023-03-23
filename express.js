let express = require("express");
let data = require("./data.json");

let server = express();
server.use(cors())

server.get("/data", (req, res) => {
  res.json(data);
});

const port = process.env.PORT || 4000;
server.listen(port, function (req, res) {
  console.log("Server has started at port 4000");
});
