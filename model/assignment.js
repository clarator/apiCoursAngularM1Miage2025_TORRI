const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2'); // ✅ indispensable

const AssignmentSchema = new mongoose.Schema({
  id: Number,
  nom: String,
  dateDeRendu: Date,
  rendu: Boolean,
  matiere: String,
  description: String
});

// appliquer le plugin
AssignmentSchema.plugin(aggregatePaginate);

module.exports = mongoose.model('Assignment', AssignmentSchema);
