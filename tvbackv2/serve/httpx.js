const app = require("./app"); 

const http = require('http').Server(app);
const PORT = app.get('PORT'); 
module.exports = {http , PORT};