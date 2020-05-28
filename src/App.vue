<template>
  <div id="app">
    <!-- all is standard html + mustache syntax variables -->
    <Header :title="title" />
    <transition name="fade">
      <router-view />

    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  data() {
    return {
      title: 'Vue Chairs DB',
    }
  },
  components: {
     Header,
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
} */
</style>
