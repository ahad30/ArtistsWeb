const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  buttonTitle: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
  }],
  isLatest: {
    type: String
  }
}, { timestamps: true });

const ProjectModel = mongoose.model('Projects', projectSchema);

module.exports = ProjectModel;
