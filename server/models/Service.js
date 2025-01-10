const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceTitle: {
      type: String,
    },
    servicePartner: {
      type: String
    },
    isLatest: {
      type: String
    },
    image: {
      type: String
    },
    selectLayout: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service; 