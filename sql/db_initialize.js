const mysql = require("mysql");
const fs = require("fs");
const path = require("path");
const {pool} = require("../server");

const rawRecipesTableSql =
`
  CREATE TABLE IF NOT EXISTS recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_name VARCHAR(100) NOT NULL UNIQUE,
    ingredients_estimated VARCHAR(2500),
    ingredients_measured VARCHAR(2000)
  );
`;

const rawCookLogTableSql = `
  CREATE TABLE IF NOT EXISTS cook_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cook_log_name VARCHAR(100),
    recipe_id INT,
    date VARCHAR(50),
    meal VARCHAR(10),
    rating INT,
    description VARCHAR(250),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id)
  );
`;

(async() => {
  await pool.query(rawRecipesTableSql, (err, res) => {
    if (err) {
      console.log("Error with table initialization", err);
    }
  });

  await pool.query(rawCookLogTableSql, (err, res) => {
    if (err) {
      return console.log("Error with table initialization", err);
    }
  })
})()