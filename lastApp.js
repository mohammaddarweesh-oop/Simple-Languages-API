// const express = require("express");
// const app = express();
// const path = require("path");
// const port = 5000;

// // use the following code to serve images, CSS files, and JavaScript files in a directory named public:
// // SSR Rendering
// app.use(express.static("./public"));

// app.get("/", (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, "./Content/header-5.html"));
// });

// app.all("*", (req, res) => {
//   res.status(404).send("No Content");
// });

// app.get("/", (req, res) => {
//   res.send("welcome\n");
//   res.end();
// });

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(port, () => {
  console.log("Server Running...");
  console.log(`=====>  Port ${port}`);
  console.log(`http://localhost:${port}/`);
});
