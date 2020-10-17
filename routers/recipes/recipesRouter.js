const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql");
// const Recipe = require("../models/recipes.model");

router.post("/", async (req, res) => {
  try {
    const doc = new Recipe(req.body);
    const newRecipe = doc.save((err) => {
      if (err) throw err;
    });
    return res.sendStatus(201);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errors: ["Error with post request for recipes"] });
  }
});
// [ ] Check if recipe already exists and send to client side to make sure they want to add it again



router.get("/", async (req, res) => {
  try {
    const allRecipes = await Recipe.find((err) => {
      if (err) throw err;
    });
    return res.status(201).json({ body: allRecipes });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ errors: ["Error with get request"] });
  }
});

// get request search FUTURE

module.exports = router;
