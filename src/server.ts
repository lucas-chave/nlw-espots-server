import express, { response } from "express";

const app = express();

app.get("/games", (_req, res) => {
  return res.json([]);
});

app.post("/ads", (_req, res) => {
  return res.status(201).json([]);
});

app.get("/games/:id/ads", (_req, res) => {
  // const adId = req.params.id;

  return response.json([]);
});

app.get("/ads/:id/discord", (_req, res) => {
  // const adId = req.params.id;

  return res.json([]);
});

app.listen(3000);
