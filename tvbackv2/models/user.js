const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    id: Number,
    nombre: String,
    comentario: String
});

module.exports = model("usuarios", userSchema);