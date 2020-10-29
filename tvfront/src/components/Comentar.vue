<template>
  <div class="about">
    <h1>{{ titulo }}</h1>
    <form action="POST" @submit.prevent="comentarDir(usuario)">
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
    const {name, comentario }= usu; 
    try {
      const res = await fetch(`${env.URL}${env.COMENTAR}`, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
        redirect: "follow",
        body: JSON.stringify({ name, comentario }),
      });
      const respuesta = await res.json();
      console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
  }
  },
};
</script>