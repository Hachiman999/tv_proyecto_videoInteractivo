<template>
  <div class="about">
    <h1>{{ titulo }}</h1>
    <form  @submit.prevent="comentarDir(usuario)">
      nombre
      <input type="text" name="" id="" v-model="usuario.name" />

      comentario
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="usuario.comentario"
      ></textarea>
      <button type="submit">enviar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import env from "../env/api";
export default {
  name: "EnvioData",
  props: {
    titulo: String,
  },
  data() {
    return {
      usuario: {
        name: "",
        comentario: "",
      },
    };
  },
  methods: {
    ...mapActions(["comentar"]),
  comentarDir: async function (usu) {
    const urespu = await fetch(`${env.URL}u=0/n=${usu.name}/c=${usu.comentario}`, {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json'
          }
        }); /*
         const urespu = await fetch(`${env.URL}${env.COMENTAR}`, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(usu) 
        });*/
    console.log(urespu); 
  }
  },
};
</script>