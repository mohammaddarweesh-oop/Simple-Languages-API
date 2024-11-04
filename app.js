const express = require("express");
const app = express();
// const { languages } = require("./my-data.js");
// const { logger } = require("./middlewares/logger.js");
// const authorize = require("./middlewares/authorize.js");
const langRouter = require("./Routers/languages.js");
const port = 5000;

app.use(express.static("./forms"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require("./db.js");

app.use("/api/languages", langRouter);

app.post("/api/add-lang", async (req, res) => {
  const { langname } = req.body;

  if (!langname) {
    return res.status(400).json({ message: "Empty value" });
  }

  try {
    // إنشاء وثيقة لغة جديدة وحفظها في قاعدة البيانات
    const newLanguage = new Language({ name: langname });
    await newLanguage.save();

    res.status(200).json({ success: true, data: newLanguage });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
});

// app.use("/api", [logger, authorize]);
// app.use([authorize, logger]);
// app.get("/", (req, res) => {
//   console.log(req.user);

//   res.send("Home");
// });
// app.get("/about", (req, res) => {
//   res.send("About");
// });

// app.get("/api/items", (req, res) => {
//   res.send("items");
// });
// app.get("/api/product", (req, res) => {
//   res.send("product");
// });

// app.get("/", (req, res) => {
//   res.send('<h1> My Home Page </h1> <a href="/api/users" >Users<a/>');
// });

// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = req.params.id;
//   console.log(id);

//   const user = users.find((u) => {
//     return u.userId === id;
//   });
//   if (!user) {
//     res.status(404).json({ Message: "User id not found" });
//   } else {
//     res.status(200).json(user);
//   }
// });

// app.get("/api/v1/query", (req, res) => {
//   console.log(req.query);
//   const { search, limit } = req.query;
//   let sUsers = [...users];
//   if (search) {
//     sUsers = sUsers.filter((user) => {
//       return user.firstName.toLowerCase().startsWith(search.toLowerCase());
//     });
//   }
//   if (limit) {
//     sUsers = sUsers.slice(0, Number(limit));
//   }
//   if (sUsers.length < 1) {
//     return res.status(404).json({ Message: "User Id Not Found" });
//   }

//   res.status(200).json(sUsers);
// });

// app.get("/api/users", (req, res) => {
//   const userBsicInfo = users.map((user) => {
//     const { userId, firstName, emailAddress } = user;
//     return { userId, firstName, emailAddress };
//   });
//   res.json(userBsicInfo);
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = req.params.id;
//   const user = users.find((user) => user.userId === id);
//   if (!user) {
//     res.status(404).send("User Not Found Here !");
//   }
//   res.status(200).json(user);
// });

// app.get("/api/v1/query", (req, res) => {
//   console.log(req.query);
//   const { search, limit } = req.query;
//   let sUsers = [...users];
//   if (search) {
//     sUsers = sUsers.filter((u) => {
//       return u.firstName.startsWith(search.toUpperCase());
//     });
//   }
//   if (limit) {
//     sUsers = sUsers.slice(0, Number(limit));
//   }
//   if (sUsers.length < 1) {
//     res.status(404).json({ Message: "Users not Found " });
//   } else {
//     res.status(200).json(sUsers);
//   }
// });

app.listen(port, () => {
  console.log("Server Running...");
});
