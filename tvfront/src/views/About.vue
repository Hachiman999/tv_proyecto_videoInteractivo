<template>
  <div class="about">
    <Suspense>
      <EnvioData titulo ="comentar en esta seccion"/>
    </Suspense>
    
  </div>
</template>

<script>
import EnvioData from '../components/Comentar'
import env from "../env/api";
export default {
  name: "Formulario",
  components: {
    EnvioData,
  },
};
</script>