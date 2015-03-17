// grab the mongoose module
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var postItSchema = new schema({note: String});

module.exports = mongoose.model('PostIt', postItSchema);