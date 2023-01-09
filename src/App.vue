<template>
  <!-- <SpinnerPage /> -->
  <Navbar />
 <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';
// import SpinnerPage from './components/SpinnerPage.vue';
  export default {
    name: "App",
    components: { Navbar }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

</style>
