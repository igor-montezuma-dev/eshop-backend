const express = require("express");
const router = express.Router();
const { Order } = require("../models/order");
const { User } = require("../models/user");
const { OrderItem } = require("../models/order-item");

// localhost:3000/api/v1/order

router.get(`/`, async (req, res) => {
  const orderList = await Order.find()
    .populate("user", "name")
    .sort({ dateOrder: -1 });
  if (!orderList) {
    res.status(500).json({ success: false });
  }
  res.send(orderList);
});


module.exports = router;
