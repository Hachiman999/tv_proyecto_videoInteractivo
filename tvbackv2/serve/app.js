const ex = require('express'); 
const env = require('../env/env');
var cors = require('cors');
const app = ex();

//configuracion
app.set('PORT', process.env.PORT || env.PORT ) ; 
app.use(cors()); 
//Middlewares
app.use(ex.json()); 
app.use(ex.urlencoded({extended:false})); 

//Rutas
app.use(require('../routes/get')); 
app.use(require('../routes/post')); 
module.exports = app; 