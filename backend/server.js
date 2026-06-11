const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/user");
const Remediering = require("./models/remediering");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/dbImme", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("MongoDB verbonden!");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hallo vanaf de backend!"
  });
});

app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password
    });

    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    res.status(500).json({
      message: "Fout bij login",
      error: error
    });
  }
});

app.get("/remedieringen", async (req, res) => {
  try {
    const remedieringen = await Remediering.find();
    res.json(remedieringen);
  } catch (error) {
    res.status(500).json({
      message: "Fout bij ophalen van remedieringen",
      error: error
    });
  }
});

app.post("/remedieringen", async (req, res) => {
  try {
    const remediering = new Remediering({
      titel: req.body.titel,
      vak: req.body.vak,
      beschrijving: req.body.beschrijving,
      datum: req.body.datum
    });

    await remediering.save();

    res.json({
      message: "Remediering toegevoegd"
    });
  } catch (error) {
    res.status(500).json({
      message: "Fout bij toevoegen van remediering",
      error: error
    });
  }
});

app.delete("/remedieringen/:id", async (req, res) => {

  try {

    await Remediering.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Remediering verwijderd"
    });

  } catch (error) {

    res.status(500).json({
      message: "Fout bij verwijderen",
      error: error
    });

  }

});

app.listen(5000, () => {
  console.log("Server draait op poort 5000");
});