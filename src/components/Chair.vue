<template>
  <router-link :to="chairPath">
    <p>{{ chair.name }}</p>
  </router-link>
</template>

<script>
export default {
  props: ['chair'],
  computed: {
    chairPath: function() {
      return `/chair/${this.chair.id}`
    },
  },
}
</script>

<style  scoped>
img {
  box-shadow: 0 0 35px #111;
}</style>
