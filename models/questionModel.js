var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  text: { type: String, required: true },
  answers: [{ type: Schema.Types.ObjectId, ref: "answer" }]
});

module.exports = mongoose.model("question", questionSchema);
