const ex = require('express'); 
const rutas= ex.Router();
const user = require('../models/user'); 
rutas.get('/',(req,res)=>{
    res.json("holi"); 
});


module.exports =  rutas;