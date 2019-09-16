"use strict";
const express = require("express");
const router = express.Router();
const pool = require("./connection");
function selectAll(res) {
  pool
    .query("select * from favorites")
    .then(result => res.json(result.rows));
}
router.get("/favorites", (req, res) => {
    console.log("test");
  selectAll(res);
});
// animals.post("/animals", (req, res) => {
//   pool
//   .query("insert into animals (name, color, type, number_of_legs, scales, fur, feathers) values ($1::text, $2::text, $3::text, $4::int, $5::boolean, $6::boolean, $7::boolean)", [req.body.name, req.body.color, req.body.type, req.body.number_of_legs, req.body.scales, req.body.fur, req.body.feathers])
//   .then(() => {
//     selectAll(res);
//   });
// });
// animals.delete("/animals/:id", (req, res) => {
//   pool
//     .query("delete from animals where id = $1::int;", [Number(req.params.id)])
//     .then(() => {
//       selectAll(res);
//     });
// });
// animals.put("/animals/:id", (req,res) => {
//   pool
//   .query("update animals set name=$1::text, color=$2::text, type=$3::text, number_of_legs=$4::int, scales=$5::boolean, fur= $6::boolean, feathers=$7::boolean where id=8::int", [req.body.name, req.body.color, req.body.type, req.body.number_of_legs, req.body.scales, req.body.fur, req.body.feathers])
//   .then(() => {
//     selectAll(res);
//   });
// });
module.exports = router;