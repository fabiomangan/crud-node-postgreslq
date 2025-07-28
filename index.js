require("dotenv").config();

const db = require("./db");

const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.json({
    message: "Funcionando!",
  });
});

app.get("/clientes/:id", async (req, res) => {
  const cliente = await db.selectCustomer(req.params.id);
  res.json(cliente);
});

app.get("/clientes", async (req, res) => {
  const clientes = await db.selectCustomers();
  res.json(clientes);
});

app.post("/clientes", async (req, res) => {
  console.log(req.body);

  await db.insertCustomer(req.body);
  res.sendStatus(201);
});

app.patch("/clientes/:id", async (req, res) => {
  console.log(req.body);

  await db.updateCustomer(req.params.id, req.body);
  res.sendStatus(200);
});

app.delete("/clientes/:id", async (req, res) => {
  console.log(req.body);

  await db.deleteCustomer(req.params.id);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}!`);
});
