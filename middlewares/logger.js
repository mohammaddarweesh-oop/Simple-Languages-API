const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const time = new Date().getFullYear();
  console.log("http://localhost" + url);
  console.log("Method : " + method);
  console.log("Time Is : " + time);

  next();
};

module.exports = {
  logger,
};
