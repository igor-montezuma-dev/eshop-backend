const express = require("express");
const router = express.Router();
const { Category } = require("../models/category");

// localhost:3000/api/v1/category

router.get(`/`, async (req, res) => {
  const categoryList = await Category.find();
  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  res.status(200).send(categoryList);
});


module.exports = router;
