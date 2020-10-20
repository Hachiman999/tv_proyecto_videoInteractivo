<template>
  <div class="about">
    <h1>{{ titulo }}</h1>
    <form action="">
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
};
</script>