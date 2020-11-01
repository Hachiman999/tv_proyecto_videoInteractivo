const mongoose = require("mongoose");
const env = require('../env/env'); 
const chalk = require('chalk'); 
mongoose
  .connect(env.DBllave , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(chalk.bold('Mongodb atlas estado: ') + chalk.white.bgBlue.bold('conectado')))
  .catch((err) => console.log(err));

  module.exports = mongoose;