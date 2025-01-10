const mongoose = require('mongoose');

const partnerGoalsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  statTitle1: {
    type: String
  },
  statTitle2: {
    type: String
  },
  stateValue1: {
    type: String
  },
  stateValue2: {
    type: String
  },
  brandsImage: [{
    type: String
  }],
  selectLayout: {
    type: String,
  }
}, { timestamps: true });

const PartnerGoalsModel = mongoose.model('PartnerGoals', partnerGoalsSchema);

module.exports = PartnerGoalsModel; 