const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema(
  {
    author: String,
    title: String,
    content: String,
    status:String,
  },
);

const Note = mongoose.model("blogs", NotesSchema);
module.exports = Note;
