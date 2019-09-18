const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/auth", (req, res) => {
  const origin = req.get(
    "origin"
  ) || `${req.protocol}://${req.get('host')}`
  
  axios
    .post(
      `https://trefle.io/api/auth/claim?token=bWFMNzRmSXV4M21qMDJwL2JXUHRvdz09&origin=${origin}`
    )
    .then(response => res.json(response.data))
    .catch(error => console.log(error));
});

module.exports = router;
