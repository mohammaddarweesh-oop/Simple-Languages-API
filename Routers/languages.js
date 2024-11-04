// routes/languages.js
const express = require("express");
const {
  getLanguages,
  createLanguage,
  updateLanguage,
  deleteLanguage,
} = require("../Controllers/languages");

const router = express.Router();

router.route("/").get(getLanguages).post(createLanguage);
router.route("/:id").put(updateLanguage).delete(deleteLanguage);

module.exports = router;
