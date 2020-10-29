const {http , PORT}= require('./serve/httpx'); 

async function inicio(){
    require('./serve/mgconexion'); 
    await http.listen(PORT,()=>{
        console.log(`Ejecutado en ${PORT}`); 
    });
}

inicio(); 

