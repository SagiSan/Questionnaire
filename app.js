const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./models/answerModel");
require("./models/commentModel");
require("./models/questionModel");
require("./models/questionnaireModel");
require("./models/userModel");
require("dotenv").config();

const port = process.env.PORT || 2000;

mongoose.connect(
  process.env.DB_STRING,
  { useNewUrlParser: true }
);

app.use(bodyParser.json());

app.use("/", express.static("frontend"));
// app.use('/api/movie', require('./api/routes/movieRoutes'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
