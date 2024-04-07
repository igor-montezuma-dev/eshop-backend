require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const api = process.env.API_URL;
const morgan = require("morgan");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connection is ready");
  })
  .catch((err) => {
    console.log(err);
  });

//middleware
app.use(express.json());
app.use(morgan("tiny"));

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000");
});

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  countInStock: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.model("Product", productSchema);

app.get(`${api}/products`, async (req, res) => {
  const productList = await Product.find();
  if(!productList) {
    res.status(500).json({success: false})
  }
  res.send(productList);
});

app.post(`${api}/products`, (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock,
  });
  product
    .save()
    .then((createdProduct) => {
      res.status(201).json(createdProduct);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
        success: false,
      });
    });
});
