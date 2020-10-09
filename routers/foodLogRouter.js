const express = require("express");
const app = express();
const router = express.Router();

const Log = require("../models/foodLog.model");

router.post("/", async (req, res) => {
  console.log("posttt");
  try {
    const doc = new Log(req.body);
    const newFood = doc.save((err) => {
      if (err) throw err;
    });
    return res.sendStatus(201);
  } catch (err) {
    console.error("Error with  posting food log request ", err);
    return res
      .status(401)
      .json({ errors: ["Error with post request for food log"] });
  }
});

router.get("/", async (req, res) => {
  try {
    const allLogs = await Log.find((err) => {
      if (err) throw err;
    });
    return res.status(201).json({ body: allLogs });
  } catch (err) {
    console.log(err);
    return res
      .status(401)
      .json({ errors: ["Error with getting all food logs"] });
  }
});

module.exports = router;
