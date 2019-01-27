var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var submissionSchema = new Schema({
    answers: [{ type: Schema.Types.ObjectId, ref: "answer" }],
    questionnaire: { type: Schema.Types.ObjectId, ref: "questionnaire" },
    submittedBy: { type: Schema.Types.ObjectId, ref: "user" }
});

module.exports = mongoose.model("submission", submissionSchema);
