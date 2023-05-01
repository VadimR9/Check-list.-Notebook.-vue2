<template>
  <div class="main">
    <the-header />
    <RouterView />
  </div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<style lang="scss">
@import "./styles/global.scss";
@import "./styles/style.scss";
html,
body {
  height: auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
