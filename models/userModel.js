var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  is_admin: Boolean,
  username: String,
  password: String,
  done_questionnaires: [{ type: Schema.Types.ObjectId, ref: "questionnaire" }]
});

module.exports = mongoose.model("user", userSchema);
