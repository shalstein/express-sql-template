const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("todolist.sqlite");

app.get("/", (req, res) => {
  res.send("Todo list");
});

app.get("/todos", async (req, res) => {
   await db. 
});

app.listen(3000, () => {
  console.log("running on port 3000");
});
