const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fs = require("fs");

let rawdata = fs.readFileSync("messages.json", "utf8");

app.get("/api/messages", (req, res) =>
  res.send({
    messages: fs.readFileSync("messages.json", "utf8"),
  })
);

app.post("/api/messages", (req, res) => {
  console.log("post!!!!!", req);
  fs.writeFileSync("messages.json", JSON.stringify(req.body.newChats));
  res.sendStatus(200);
});

app.listen(8080);
