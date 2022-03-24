const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/note.controller");

router.route("/").get(getAllNotes).post(createNote);

router.route("/:id").get(getSingleNote).patch(updateNote).delete(deleteNote);

module.exports = router;
