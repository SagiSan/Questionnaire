var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tokenSchema = new Schema({
  token: { type: String, required: true, index: { unique: true } },
  user: { type: Schema.Types.ObjectId, ref: "user", required: true }
});

module.exports = mongoose.model("token", tokenSchema);
