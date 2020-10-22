import { createStore } from 'vuex'; 
import env from '../env/api'; 
export default createStore({
  state: {
    comentarios:[]
  },
  mutations: {
    setComentario(state, payload){
      state.comentarios = payload; 
    }
  },
  actions: {
   async comentar({commit},usuario){
      console.log(usuario); 
      try{
        const res = await fetch(`${env.URL}${env.COMENTAR}`,{
          mode: 'no-cors', 
          method:'POST',
          headers:{
            'Content-Type' : 'application/json'
          },
          body:JSON.stringify(usuario) 
        });
        const respuesta = await res.json(); 
        console.log(respuesta); 
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
