const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/auth", (req, res) => {
  axios
    .post(
      `https://trefle.io/api/auth/claim?token=bWFMNzRmSXV4M21qMDJwL2JXUHRvdz09&origin=${req.get(
        "origin"
      )}`
    )
    .then(response => res.json(response.data))
    .catch(error => console.log(error));
});

module.exports = router;
