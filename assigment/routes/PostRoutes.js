const express = require("express");

const authenticateToken = require("../middleware");
const {
  PostPostController,
  PostUpdateController,
  PostDeleteController,
} = require("../controller/PostController");

const postRouter = express.Router();

postRouter.post("/post", authenticateToken, PostPostController);
postRouter.put("/update", authenticateToken, PostUpdateController);
postRouter.delete("/delete", authenticateToken, PostDeleteController);

module.exports = postRouter;
