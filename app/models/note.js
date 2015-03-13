// grab the mongoose module
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var simpleNoteSchema = new schema({note: String});

module.exports = mongoose.model('SimpleNote', simpleNoteSchema);