const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    imageUrl: String,
    text: String,
    url: String,
  });
  
  const Certificate = mongoose.model('Certificate', certificateSchema);

  module.exports = Certificate;