// grab the mongoose module
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var npcSchema = new schema({name: String, note: String});

module.exports = mongoose.model('Npc', npcSchema);