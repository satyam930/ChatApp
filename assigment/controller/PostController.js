const PostModels = require("../models/PostModels");
const UserModel = require("../models/UserModel");

const PostPostController = async (req, res) => {
  try {
    const id = req.user.user._id;

    const user = await UserModel.findOne({ _id: id });
    const newPost = new PostModels({
      name: req.body.name,
      description: req.body.description,
      author: id,
    });
    await newPost.save();
    res.status(200).json({
      userId: user._id,
      name: user.name,
      postId: newPost._id,
    });
  } catch (error) {
    console.log("error in posting a post");
    res.status(400).send({
      error: "error in creating the post",
      error,
    });
  }
};

const PostUpdateController = async (req, res) => {
  try {
    const { id, name, description } = req.body;
    await PostModels.updateOne(
      { _id: id },
      { name: name, description: description }
    );
  } catch (error) {
    res.status(400).send({
      message: "error in updating post",
      error,
    });
  }
};
const PostDeleteController = async (req, res) => {
  try {
    const { id } = req.body;
    await PostModels.findOneAndDelete({ _id: id });
  } catch (error) {
    res.status(400).send({
      message: "error in deleting post",
      error,
    });
  }
};
module.exports = {
  PostPostController,
  PostUpdateController,
  PostDeleteController,
};
