<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Suspense>
      <HelloWorld titulo="Bienvenido a proyecto de video con vue y deno" />
    </Suspense>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import env from "../env/api";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
 
};
</script>
