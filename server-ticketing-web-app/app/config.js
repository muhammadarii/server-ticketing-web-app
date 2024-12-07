const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDB: process.env.URL_MONGODB_DEV,
  jwtExpiration: "24h",
  jwtSecret: "jwtSecret",
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};
