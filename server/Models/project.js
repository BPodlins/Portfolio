const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    imageUrl: String,
    text: String,
    url: String,
    category: [],
  });

  const Project = mongoose.model('Project', projectSchema);

  
  module.exports = Project;