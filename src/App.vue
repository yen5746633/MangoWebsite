<template>
  <div id="app">
    <TopBar/>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import TopBar from "../src/components/TopBar";

export default {
  name: "App",
  components: { TopBar },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
