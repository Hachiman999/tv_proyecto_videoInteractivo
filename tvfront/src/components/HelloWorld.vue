<template>
  <div class="hello">
    <h1>{{titulo }}</h1>
      <div v-for="u in respu" v-bind:key="u.id">
        <h4>comentario: </h4> 
       nombre =>  {{u.name}} <br> 
       comentario=> {{u.comentario}}
      </div>
    
  </div>
</template>

<script>

import env from '../env/api'
export default {
  name: 'HelloWorld',
  props: {
    titulo: String,
    comentarios : []
  }, async setup(){
   // const comentarios = ref(null);
    const urespu = await fetch(`${env.URL}${env.COMENTARIOS}`);
    const respu = await urespu.json()
    return {respu} 
    
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
