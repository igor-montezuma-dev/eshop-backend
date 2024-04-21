const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

require("dotenv/config");

const api = process.env.API_URL;

//cors
const cors = require("cors");
app.use(cors());
app.options("*", cors());

const productsRoutes = require("./routers/products");
const categoriesRoutes = require("./routers/categories");
const ordersRoutes = require("./routers/orders");
const usersRoutes = require("./routers/users");
const swaggerDocument = require("./swagger.json");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

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
app.use(authJwt());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(errorHandler);

//Routers
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/orders`, ordersRoutes);
app.use(`${api}/users`, usersRoutes);

//swagger

app.use(`${api}/api-docs`, swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(3000, () => {
  console.log("Server is running http://localhost:3000");
});
