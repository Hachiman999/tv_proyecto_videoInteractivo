<template>
  <div class="about">
      <h1>{{ titulo }}</h1>
  <p>
      nombre
      <input type="text" name="" id="" v-model="usuario.name">
  </p>
  <p>
      comentario 
     <textarea name="" id="" cols="30" rows="10" v-model="usuario.comentario"></textarea>
  </p>
  <button type="submit">enviar</button>
 
  </div>
</template>
<script>
export default {
  name: 'EnvioData',
  props: {
    titulo: String
  },
  data() {
    return {
      usuario:{
          name:'',
          comentario:''
      }
    }
  }
}
</script>