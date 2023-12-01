const mongoose = require("mongoose");
const CommentModel = require("../models/CommentModel");

const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  comment: [CommentModel.schema],
});

module.exports = mongoose.model("Post", PostSchema);
