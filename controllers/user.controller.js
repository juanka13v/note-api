const User = require("../model/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length < 1) {
      return res
        .status(200)
        .json({ status: "success", msg: "There aren´t users" });
    }

    res.status(200).json({ status: "success", users: users });
  } catch (err) {
    res.status(400).json({
      status: "error",
      msg: "the users could not be founted",
      error: err,
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json({ status: "success", user });
  } catch (err) {
    res.status(404).json({
      status: "error",
      msg: "User not found",
      error: err,
    });
  }
};

const createUser = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;

  const newUser = new User({ username, email, password });
  try {
    const userSaved = await newUser.save();

    res.status(201).json({ status: "success", user: userSaved });
  } catch (err) {
    res.status(400).json({
      status: "error",
      msg: "the user could not be created",
      error: err,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.status(203).json({ status: "success", user: updatedUser });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", msg: "error user not updated", error });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser)
      return res.status(404).json({ status: "success", msg: "User not found" });

    res.status(203).json({ status: "success", msg: "user eliminated" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "error user not eliminated", error });
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
