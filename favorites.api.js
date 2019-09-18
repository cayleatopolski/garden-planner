"use strict";
const express = require("express");
const router = express.Router();
const pool = require("./connection");
function selectAll(res) {
  pool
    .query("select * from favorites order by plant_type desc, common_name asc")
    .then(result => res.json(result.rows));
}
router.get("/favorites", (req, res) => {
  console.log("test");
  selectAll(res);
});

module.exports = router;
