const express = require("express");
const cors = require("cors");
// const port = 5000;
const port = process.env.PORT || 5000;
const router = require("./routes");
const anotherOne = require("./favorites.api")
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use("/", anotherOne);
app.use(express.static(__dirname + "/dist"));

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

