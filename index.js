const { hello, world } = require("./module");
const http = require("http");
const moment = require("moment");

console.log(hello(), world());

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/welcome":
      welcome(res);
      break;
    case "/":
      home(res);
      break;
    default:
      page404(res);
      break;
  }
});

const welcome = (res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      status: "successfuly",
      message: "wellcome to MERN class",
      study: "Node JS",
      loginAt: moment(),
    })
  );
  res.end();
};

const page404 = (res) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      status: "Failed",
      message: "Resource Not Found",
    })
  );
  res.end();
};
const home = (res) => {
  res.end("<h1>Home Page </h1>");
};
server.listen(3000, () => console.log("server running at http://127.0.0.1:3000"));
