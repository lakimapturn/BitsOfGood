import express from "express";
import { database } from "./database.js";
import cors from "cors";

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/bog/users", (req, res) => {
  res.json(database).status(200);
});

app.get("/api/bog/users/:id", (req, res) => {
  const user = database.filter((user) => user.id === req.params.id)[0];
  res.json(user).status(200);
});

app.post("/api/bog/users", (req, res) => {
  let lastId;
  if (database.length === 0) {
    lastId = 1;
  } else {
    lastId = parseInt(database[database.length - 1].id);
  }
  const newId = lastId + 1;
  const user = { ...req.body, id: newId.toString() };
  database.push(user);
  res.json(user).status(201);
});

app.delete("/api/bog/users/:id", (req, res) => {
  const user = database.filter((user) => user.id === req.params.id)[0];
  const index = database.findIndex((u) => u.id == user.id);
  if (index === -1) {
    res.json({}).status(400);
  } else {
    database.splice(index, 1);
    res.json({}).status(204);
  }
});

app.put("/api/bog/users/:id", (req, res) => {
  let user = database.filter((user) => user.id === req.params.id)[0];
  user = { ...req.body, id: user.id };
  const index = database.findIndex((u) => u.id == user.id);
  if (index === -1) {
    res.json({}).status(400);
  } else {
    database[index] = user;
    res.json(user).status(202);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
