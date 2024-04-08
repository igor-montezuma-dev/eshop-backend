const express = require("express");
const router = express.Router();
const { User } = require("../models/user");


// localhost:3000/api/v1/users
router.get(`/`, async (req, res) => {
  const userList = await User.find().select("-passwordHash");
  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

module.exports = router;
