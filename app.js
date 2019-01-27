const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Middleware = require('./middleware');

require("dotenv").config();

const port = process.env.PORT || 2000;

mongoose.connect(
  process.env.DB_STRING,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());

app.use("/", express.static("frontend"));

app.use("/auth", require('./api/auth'));

app.use(Middleware.authentication);
app.use(Middleware.authenticated);

app.use("/questionnaire", require('./api/questionnaire'));
app.use("/submission", require('./api/submission'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
