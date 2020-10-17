const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const mysql = require("mysql");

exports.pool = mysql.createPool({
  user: "root",
  password: "password",
  database: "recepeasy",
  port: 3306
});
// const mongoose = require("mongoose");
// const {Client} = require("pg");
// const client = new Client();

require("./sql/db_initialize");

const { DATABASE_URI, environment, PORT } = require("./config/index");

const recipesRouter = require("./routers/recipesRouter.js");
const foodLogRouter = require("./routers/foodLogRouter");
// app.use(express.static(path.join(__dirname, "../client/public/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

app.use("/api/recipes", recipesRouter);
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
