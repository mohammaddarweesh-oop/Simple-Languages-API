const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/languageDB")
  .then(() => console.log(`Connected to MongoDB...`))
  .catch((err) => console.log("MongoDB connection error:", err));
