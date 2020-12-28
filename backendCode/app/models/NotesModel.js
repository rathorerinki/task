const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
);

const Note = mongoose.model("user", NotesSchema);
module.exports = Note;
