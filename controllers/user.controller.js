const User = require("../model/User");

const getAllUsers = (req, res) => {
  res.send("get all users");
};

const getSingleUser = (req, res) => {};
const createUser = (req, res) => {};
const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
