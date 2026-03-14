const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

let data = [];

// READ
app.get("/data", (req, res) => {
  res.json(data);
});

// CREATE
app.post("/data", (req, res) => {
  data.push(req.body);
  res.json({ message: "Data berhasil ditambah" });
});

// DELETE
app.delete("/data/:id", (req, res) => {
  data.splice(req.params.id, 1);
  res.json({ message: "Data berhasil dihapus" });
});

app.listen(port, () => {
  console.log("Server berjalan di http://localhost:3000");
});