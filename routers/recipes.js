const {
  pool,
  app,
  router
} = require("../server");
const mysql = require("mysql");

const getAllRecipesSqlQuery = `
  SELECT * FROM recipes;
`;
router.get("/get-all-recipes", async (req, res) => {
  try {
    pool.query(getAllRecipesSqlQuery, (err, data) => {
      if (err) {
        throw err;
      }
      return res.status(201).json({ body: data });
    })
  } catch (err) {
    console.error(err);
    return res.status(401).json({ errors: ["Error with get request"] });
  }
});

const insertRecipesSqlQuery = `
  INSERT INTO recipes (recipe_name, ingredients) VALUES(?, ?);
`;

router.post("/post-recipe", async (req, res) => {
  try {
    const ingredients = JSON.stringify(req.body.ingredients);
    const sqlFormatted = mysql.format(insertRecipesSqlQuery, [req.body.name, ingredients]);
    pool.query(sqlFormatted, (err, data) => {
      if (err) {
        throw err; // handle error differently so that it doesn't crash the server
      }
      return res.sendStatus(201);
    })
  } catch (err) {
    console.error(err);
    return res.status(401).json({ errors: ["Error with adding a recipe."]})
  }
})

module.exports = router;