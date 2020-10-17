const mysql = require("mysql");
const { pool, app, router } = require("../../server");

const getAllRecipesSqlQuery = `
  SELECT * FROM recipes;
`;

router.get("/", async (req, res) => {
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

module.exports = router;