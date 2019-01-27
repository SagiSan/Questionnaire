var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  isAdmin: { type: Boolean, required: true },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  doneQuestionnaires: [{ type: Schema.Types.ObjectId, ref: "submission" }]
});

module.exports = mongoose.model("user", userSchema);
