var mongoose = require("mongoose");
var arrayUniquePlugin = require('mongoose-unique-array');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  isAdmin: { type: Boolean, required: true },
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  doneQuestionnaires: [{ type: Schema.Types.ObjectId, ref: "submission", unique: true }]
});
userSchema.plugin(arrayUniquePlugin);

module.exports = mongoose.model("user", userSchema);
