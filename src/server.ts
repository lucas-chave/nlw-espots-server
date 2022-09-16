import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  return res.json({ json: "example" });
});

app.listen(3000);
