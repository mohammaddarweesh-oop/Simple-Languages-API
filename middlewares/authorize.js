const authorize = (req, res, next) => {
  const { user } = req.query;
  console.log(user);

  if (user === "ahmad") {
    req.user = { name: user, id: 3 };
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
  console.log("authorize");
};

module.exports = authorize;
