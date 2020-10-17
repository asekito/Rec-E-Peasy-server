const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const cors = require("cors");
const mysql = require("mysql");

exports.router = router;
exports.app = app;

exports.pool = mysql.createPool({
  user: "root",
  password: "password",
  database: "recepeasy",
  port: 3306
});

require("./sql/db_initialize");

// const mongoose = require("mongoose");
// const {Client} = require("pg");
// const client = new Client();


const { DATABASE_URI, environment, PORT } = require("./config/index");

const getAllRecipesRoute = require("./routers/recipes/get-all-recipes");
const postRecipeRoute = require("./routers/recipes/add-recipe");
const foodLogRouter = require("./routers/foodLogRouter");
// app.use(express.static(path.join(__dirname, "../client/public/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

app.use("/api/recipes/get-all-recipes", getAllRecipesRoute);
app.use("/api/recipes/post-recipe", postRecipeRoute);
app.use("/api/food-log", foodLogRouter);

// mongoose.connect(DATABASE_URI, {
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// (async() => {
//   await client.connect();

//   const res = await client.query("SELECT * FROM recipes");
//   console.log(res);
//   await client.end();
// })()

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`));
