// models/Language.js
const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Language", LanguageSchema);
