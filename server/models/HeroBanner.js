const mongoose = require('mongoose');

const heroBannerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  buttonTitle: {
    type: String,
    required: true,
  },
  achievementTitles: [{
    type: String
  }]
}, { timestamps: true });

const HeroBannerModel = mongoose.model('HeroBanner', heroBannerSchema);

module.exports = HeroBannerModel; 