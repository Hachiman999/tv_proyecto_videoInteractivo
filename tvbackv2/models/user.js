const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    nombre: String,
    comentario : String
}); 

module.exports = model("User", userSchema);