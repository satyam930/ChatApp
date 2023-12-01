const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ user }, "vivek");
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const SignupController = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ name, email, password: hashedPassword });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const UpdateController = async (req, res) => {
  try {
    const { prevemail, email, name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await UserModel.updateOne(
      { email: prevemail },
      { name: name, email: email, password: hashedPassword }
    );
    res.json({ message: "data updated successfully" });
  } catch (error) {
    console.log(`error in updating the data`);
  }
};

module.exports = { LoginController, SignupController, UpdateController };
