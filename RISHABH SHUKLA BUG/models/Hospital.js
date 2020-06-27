const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const HospitalSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  location: {
    latitude: { type: String },
    longitude: { type: String },
  },
  address: { type: String, unique: true },
  telephone: { type: String, unique: true },
  beds: { type: Number, default: 0 },
  type: [{ type: String }],
  description: { type: String, required: true },
  image: { type: String },
  totalPatients: { type: Number, default: 0 },
  testsAvailable: { type: Number, default: 0 },
  isCovidDedicated: { type: Boolean, default: false },
  isAcceptingCovidPatients: { type: Boolean, default: true },
  isOfferingFullMedicalCare: { type: Boolean, default: true },
  isAcceptingNonCovidPatients: { type: Boolean, default: true },
  lastUpdated: { type: Number, default: Date.now() },
  isVerified: { type: Boolean, default: false },
  ventilatorCount: { type: Number, default: 0 },
  staffCount: { type: Number, default: 0 },
});
HospitalSchema.pre("save", function (next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified("password")) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds, function (err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

HospitalSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

module.exports = mongoose.model("Hospital", HospitalSchema);
