const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const TestimonialModel = mongoose.model('Testimonials', testimonialSchema);

module.exports = TestimonialModel; 