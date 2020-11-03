const path = require("path");
const express = require("express");
const app = express(); // create express app
const port = process.env.PORT || 8000;

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
//   });

  // add middleware
//app.use(express.static("build"));

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("build"));

// start express server on port 5000
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});