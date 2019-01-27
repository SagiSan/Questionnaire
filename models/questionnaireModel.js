var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var questionnaireSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  questionList: [{ type: Schema.Types.ObjectId, ref: "question" }]
});

module.exports = mongoose.model("questionnaire", questionnaireSchema);
