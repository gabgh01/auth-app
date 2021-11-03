const express = require("express");
const cors = require("cors");
//crear el servidor
const app = express();

//CORS
app.use(cors());

//lectura de body
app.use(express.json());
//
const router = require("./routes/auth.routes");
//GET
// app.get("/", (req, res) => {
//   res.json({
//     message: "peticion localhost:3000",
//     status: "ok",
//   });
// });

//implementacion de las rutas
app.use("/api/auth-t-evolvers", router);
//Port app
app.listen(3000, () => {
  console.log("server listen in port ", 3000);
});
