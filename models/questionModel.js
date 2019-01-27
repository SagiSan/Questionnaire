var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  text: String,
  answers: [{ type: Schema.Types.ObjectId, ref: "answer" }]
});

module.exports = mongoose.model("question", questionSchema);
