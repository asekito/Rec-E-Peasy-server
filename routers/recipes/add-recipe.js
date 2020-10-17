const {
  pool,
  app,
  router
} = require("../../server");
const mysql = require("mysql");

const insertRecipesSqlQuery = `
  INSERT INTO recipes (recipe_name, ingredients) VALUES(?, ?);
`;

router.post("/", async (req, res) => {
  try {
    const ingredients = JSON.stringify(req.body.ingredients);
    const sqlFormatted = mysql.format(insertRecipesSqlQuery, [req.body.name, ingredients]);
    pool.query(sqlFormatted, (err, data) => {
      if (err) {
        throw err; // handle error differently
      }
      return res.sendStatus(201);
    })
  } catch (err) {
    console.error(err);
    return res.status(401).json({ errors: ["Error with adding a recipe."]})
  }
})

module.exports = router;