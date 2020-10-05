const express = require("express");
const app = express();
const router = express.Router();

const Log = require("../models/foodLog.model");

router.post("/", async (req, res) => {
  try {
    newFood = new Log(req.body).save((err) => {
      if (err) throw err;
      else console.log("New food added to food log");
    });
    return res.status(201).json({ errors: ["none"] });
  } catch (err) {
    console.error("Error with  posting food log request ", err);
    return res
      .status(401)
      .json({ errors: ["Error with post request for food log"] });
  }
});

router.get("/", async (req, res) => {
  // console.log(req);
  try {
    const allLogs = await Log.find((err) => {
      if (err) throw err;
    });
    return res.status(201).send(allLogs);
  } catch (err) {
    return res
      .status(401)
      .json({ errors: ["Error with getting all food logs"] });
  }
});

module.exports = router;
