var express = require("express");
var app = express();

app.get("/", (require, response) => {
  console.log("raiz de proyect");
  response.json({
    message: "peticion localhost:3000",
    status: "ok",
  });
});

app.listen(3000, () => {
  console.log("server listen in port ", 3000);
});
