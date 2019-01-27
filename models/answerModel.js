var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var answerSchema = new Schema({
  text: String
});

module.exports = mongoose.model("answer", answerSchema);
