const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

require('dotenv/config');

const api = process.env.API_URL;

//cors
const cors = require('cors');
app.use(cors());
app.options('*', cors());

const productsRoutes = require('./routers/products');
const categoriesRoutes = require('./routers/categories');
const ordersRoutes = require('./routers/orders');
const usersRoutes = require('./routers/users');


//database connection
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

//Routers
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/orders`, ordersRoutes);
app.use(`${api}/users`, usersRoutes);

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000");
});
