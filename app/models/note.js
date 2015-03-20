// grab the mongoose module
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var simpleNoteSchema = new schema({note: String, date: {type: Date, default: Date.now}});

module.exports = mongoose.model('SimpleNote', simpleNoteSchema);