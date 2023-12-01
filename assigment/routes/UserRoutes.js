const express = require("express");
const {
  LoginController,
  SignupController,
  UpdateController,
} = require("../controller/UserController");

const router = express.Router();

router.post("/login", LoginController);
router.post("/signup", SignupController);
router.put("/update", UpdateController);

module.exports = router;
