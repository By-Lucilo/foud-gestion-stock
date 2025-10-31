const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.json());

const stocks = [
  { id: 1, produit: "Lasagne", quantite: 5, date: "2025-10-31" }
];

app.get("/.netlify/functions/stocks", (req, res) => {
  res.json({ ok: true, stocks });
});

module.exports.handler = serverless(app);
