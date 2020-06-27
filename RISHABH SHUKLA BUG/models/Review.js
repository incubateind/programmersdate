const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  message: { type: String, required: true },
  hospitalID: { type: mongoose.SchemaTypes.ObjectId, required: true },
  userID: { type: mongoose.SchemaTypes.ObjectId, required: true },
  upvoteCount: { type: Number, default: 0 },
  downvoteCount: { type: Number, default: 0 },
  timestamp: true,
});

module.exports = mongoose.model("Review", ReviewSchema);
