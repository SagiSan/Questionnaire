var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var questionnaireSchema = new Schema({
  title: String,
  description: String,
  questionList: [{ type: Schema.Types.ObjectId, ref: "question" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }]
});

module.exports = mongoose.model("questionnaire", questionnaireSchema);
