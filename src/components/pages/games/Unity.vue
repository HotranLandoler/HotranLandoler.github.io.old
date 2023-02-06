<template>
  <div class="unity">
    <VueUnity :unity="Unity" width="960" height="540" />
  </div>
</template>

<script lang="ts" setup>
import UnityWebgl from "Unity-webgl";
import VueUnity from "Unity-webgl/vue";

const Unity = new UnityWebgl({
  loaderUrl: "/UnityBuild/Build/WebGL.loader.js",
  dataUrl: "/UnityBuild/Build/WebGL.data.unityweb",
  frameworkUrl: "/UnityBuild/Build/WebGL.framework.js.unityweb",
  codeUrl: "/UnityBuild/Build/WebGL.wasm.unityweb",
  streamingAssetsUrl: "/UnityBuild/StreamingAssets",
});
</script>

<style scoped>
.unity {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
