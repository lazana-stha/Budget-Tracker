import express from "express";
import data from "./data/data.js";

const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/data", (req, res) => {
  return res.json(data);
});

app.post("/data", (req, res) => {
  const transaction = req.body;
  data.push(transaction);
  return res.status(201).json({ message: "Transaction added successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
