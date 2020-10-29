const mongoose = require("mongoose");
const env = require('../env/env'); 

mongoose
  .connect(env.DBllave , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.log(err));