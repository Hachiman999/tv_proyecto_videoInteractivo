const ex = require('express'); 
const rutas= ex.Router();
const user = require('../models/user'); 
const chalk = require('chalk'); 
let now= new Date(); 

rutas.get('/',(req,res)=>{
    let fecha= new Date(); 
    const dia =  fecha.getUTCDate(); 
    const hora =  fecha.getUTCHours(); 
    const minutos =  fecha.getUTCMinutes(); 
    const segundos = fecha.getUTCSeconds(); 
   console.log(chalk.cyan('dia: ') + dia+chalk.cyan(' hora: ')+hora+chalk.cyan(' minutos: ')+minutos+chalk.cyan(' segundos: ')+segundos );
  
   console.log(chalk.grey('ruta: ')+ chalk.white.bgBlue(req.route.path) ); 
   // console.log(req); 
    res.json("holi"); 
});

rutas.get('/us',async (req,res)=>{
    let fecha= new Date(); 
    const dia =  fecha.getUTCDate(); 
    const hora =  fecha.getUTCHours(); 
    const minutos =  fecha.getUTCMinutes(); 
    const segundos = fecha.getUTCSeconds(); 
   console.log(chalk.cyan('dia: ') + dia+chalk.cyan(' hora: ')+hora+chalk.cyan(' minutos: ')+minutos+chalk.cyan(' segundos: ')+segundos );
  
   console.log(chalk.grey('ruta: ')+ chalk.white.bgBlue(req.route.path) ); 

   const users = await user.find({});
   //console.log(users); 
   res.json(users);
});





module.exports =  rutas;