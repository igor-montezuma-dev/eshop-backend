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

app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
    name: "hair dresser",
    image: "some_url",
  };
  res.send(product);
});

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  res.send(newProduct);
  console.log(newProduct);
});
