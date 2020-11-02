const ex = require('express'); 
const rutas= ex.Router();
const user = require('../models/user'); 
const chalk = require('chalk'); 
rutas.post('/cu', async(req,res)=>{
   let fecha= new Date(); 
 const dia =  fecha.getUTCDate(); 
 const hora =  fecha.getUTCHours(); 
 const minutos =  fecha.getUTCMinutes(); 
 const segundos = fecha.getUTCSeconds(); 
console.log(chalk.cyan('dia: ') + dia+chalk.cyan(' hora: ')+hora+chalk.cyan(' minutos: ')+minutos+chalk.cyan(' segundos: ')+segundos );
console.log(chalk.grey('ruta: ')+ chalk.white.bgBlue(req.route.path) ); 
const {nombre, comentario }= req.body; 
const newUser = new user({
  nombre : nombre,
  comentario: comentario
});
const userSaved = await newUser.save();
//const usuarios = await user.find({});
res.json(req.body);
});


module.exports =  rutas;