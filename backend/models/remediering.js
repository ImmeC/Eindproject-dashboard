const mongoose = require("mongoose");

const RemedieringSchema = new mongoose.Schema({
  titel: String,
  vak: String,
  beschrijving: String,
  datum: String
});

module.exports = mongoose.model("Remediering", RemedieringSchema);