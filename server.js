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

const recipesRouter = require("./routers/recipes");
const getAllCookLogRoute = require("./routers/cooklog");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true }));

app.use("/api/recipes/", recipesRouter);
app.use("/api/cooklog/", getAllCookLogRoute);


app.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${process.env.PORT}/`));