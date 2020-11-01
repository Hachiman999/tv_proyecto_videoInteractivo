const {http , PORT}= require('./serve/httpx'); 
const chalk = require('chalk'); 
async function inicio(){
    require('./serve/mgconexion'); 
    await http.listen(PORT,()=>{
        console.log(chalk.bold(`Ejecutado en el puerto: `) +chalk.white.bgBlue.bold(PORT)); 
    });
}

inicio(); 

