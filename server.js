let express = require("express");
var bodyParser = require("body-parser");

let app = express();
let port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("views", __dirname + "/");
app.engine("html", require("ejs").renderFile);

app.get("/", function (req, res) {
  res.render("index.html");
});

app.get("/calculator", function (req, res) {
  res.render("calculator.html");
});

app.post("/cal", function (req, res) {
  let v1 = req.body.first;
  let v2 = req.body.second;

  let sum = Number(v1) + Number(v2);

  let response = { data: sum, statusCode: 200, messege: "success" };
  res.json(response);
});

app.get("/addTwoNumbers", (req, res) => {
  let v1 = req.query.num1;
  let v2 = req.query.num2;

  let sum = Number(v1) + Number(v2);

  let response = { data: sum, statusCode: 200, messege: "success" };
  res.json(response);
});

app.listen(port, () => {
  console.log("Sever running on port " + port);
});
