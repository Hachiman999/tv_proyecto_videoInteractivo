import { createStore } from 'vuex';
import env from '../env/api';
export default createStore({
  state: {
    comentarios: []
  },
  mutations: {
    setComentario (state, payload) {
      state.comentarios = payload;
    }
  },
  actions: {
    async comentar ({ commit }, usuario) {
      const { name, comentario } = usuario;
     console.log(usuario);
      try {
        const res = await fetch(`${env.URL}${env.COMENTAR}`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
          },
          redirect: 'follow',
          body: JSON.stringify({ name, comentario })
        });
        const respuesta = await res.json();
        console.log(respuesta);
      } catch (error) {
        console.log(error)
      }
    },
    async obtenerComentarios(){
      try {
        const res = await fetch(`${env.URL}${env.COMENTARIOS}`, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        });
        const respuesta = await res.json();
        console.log(respuesta);
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
