const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorProfile = new Schema({
  doctor: {
    type: Schema.Types.ObjectId,
    ref: "Doctor"
  },
  currentWorkPlace: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      description: {
        type: String
      }
    }
  ]
});
module.exports = mongoose.model("DoctorProfile", doctorProfile);
