const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/auth", (req, res) => {
  console.log("working");
  axios
    .post(
      "https://trefle.io/api/auth/claim?token=bWFMNzRmSXV4M21qMDJwL2JXUHRvdz09&origin=http://localhost:4200"
    )
    .then(response => res.json(response.data))
    .catch(error => console.log(error));
});

module.exports = router;
