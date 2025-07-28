require("dotenv").config();

const db = require("./db");

const express = require("express");

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "Funcionando!",
  });
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}!`);
});
