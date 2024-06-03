const express = require("express");
const app = express();
const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgres://express_sfrf_user:8pM1HxIvufvzJtw0oNu86eR42IdPL7Xz@dpg-cpegnqlds78s73f05bog-a.ohio-postgres.render.com:5432/express_sfrf",
});

app.get("/", (req, res) => {
  res.send("Todo list");
});

app.get("/todos", async (req, res) => {
  const todos = await client.query("select * from todos");
  console.log(todos[0]);
  res.send("go");
});

app.listen(3000, () => {
  console.log("running on port 3000");
});

process.on("exit", async () => {
  console.log("exiting");
  await client.end();
});

process.on("SIGINT", async () => {
  console.log("Received SIGINT signal.");
  await client.end();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Received SIGTERM signal.");
  await client.end();
  process.exit(0);
});
