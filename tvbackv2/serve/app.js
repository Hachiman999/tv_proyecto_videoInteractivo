const ex = require('express'); 
const env = require('../env/env');

const app = ex();

//configuracion
app.set('PORT', process.env.PORT || env.PORT ) ; 

//Middlewares
app.use(ex.json()); 
app.use(ex.urlencoded({extended:false})); 

//Rutas
app.use(require('../routes/get')); 
module.exports = app; 