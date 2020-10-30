<template>
  <div class="home">

    <video ref="videoRef" src="" id="video-container" width="100%" controls></video>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import vi from "../assets/animacion.mp4"
import env from "../env/api";
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted: function() {
    this.$refs.videoRef.src = vi;
    this.$refs.videoRef.play();
    }
 
};
</script>
