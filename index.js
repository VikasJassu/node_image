const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "You are visiting root route",
  });
});

app.get("/signup", (req, res) => {
  res.json({
    message: "You are visiting signup route",
  });
});

app.get("/login", (req, res) => {
  res.json({
    message: "You are visiting login route",
  });
});

app.get("/logout", (req, res) => {
  res.json({
    message: "You are logged out successfully",
  });
});

app.listen(8000, () => {
  console.log("App is listening at port 8000");
});
