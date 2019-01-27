var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var commentSchema = new Schema({
	'text' : String,
});

module.exports = mongoose.model('comment', commentSchema);
