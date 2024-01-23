const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rajitdutta2002:One-2-three@cluster0.wf9jjeb.mongodb.net/"
);

const toDoSchema = mongoose.Schema({
  title: String,
  description: String,
  complete: Boolean,
});

const todo = mongoose.model("todos", toDoSchema);

module.exports = { todo };
