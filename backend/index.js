const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/todos", async (req, res) => {
  const todoDisplay = await todo.find({});
  return res.json({
    todoDisplay,
  });
});

app.post("/todo", async (req, res) => {
  const createTodoBody = req.body;
  const parsedTodoBody = createTodo.safeParse(createTodoBody);
  if (!parsedTodoBody.success)
    return res.status(404).json({
      msg: "wrong inputs!",
    });

  await todo.create({
    title: createTodoBody.title,
    description: createTodoBody.description,
    complete: false,
  });
  return res.json({ msg: "todo created ✅" });
});

app.put("/done", async (req, res) => {
  const updateTodoBody = req.body;
  const parsedTodoBody = updateTodo.safeParse(updateTodoBody);
  if (!parsedTodoBody.success)
    return res.status(404).json({
      msg: "wrong inputs!",
    });

  await todo.findOneAndUpdate(
    { _id: req.body.id },
    { $set: { complete: true } }
  );
});

app.delete("/remove/:id", async (req, res) => {
  const requiredId = req.params.id;
  const deletedId = await todo.findOneAndDelete({ _id: requiredId });

  if (deletedId)
    return res.status(200).json({
      msg: "todo deleted",
    });
  else
    return res.status(404).json({
      msg: "wrong id",
    });
});

app.listen(3000, () => {
  console.log("Server is running...");
});
