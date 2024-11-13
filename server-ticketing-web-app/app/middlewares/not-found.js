const notfound = (req, res) => {
  res.status(404).send({ msg: "route does not exist" });
};

module.exports = notfound;
