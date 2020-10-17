const mysql = require("mysql");
const {
  pool,
  app,
  router
} = require("../server");

const getAllCookLogSqlQuery = `
  SELECT * FROM cook_log;
`;

router.get("/get-all-cooklogs", async (req, res) => {
  try {
    pool.query(getAllCookLogSqlQuery, (err, data) => {
      if (err) {
        throw err;
      }
      return res.status(201).json({ body: data });
    })
  } catch (err) {
    console.error(err);
    return res.status(401).json({ errors: ["Error with getting cook log"]});
  }
});

module.exports = router;