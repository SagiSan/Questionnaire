var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var questionnaireSchema = new Schema({
  title: String,
  description: String,
  questionList: [{ type: Schema.Types.ObjectId, ref: "question" }]
});

module.exports = mongoose.model("questionnaire", questionnaireSchema);
