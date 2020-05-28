<template>
  <header>
    <h1><router-link to="/">
      </router-link>
      </h1>
  </header>
</template>

<script>
export default {
  name: "header2",
  props: {
    title: String
  },
  data() {
    return {
      name: "Beatrix"
    };
  },
  
};
</script>

<style scoped>
/* header {
  background-color: #111;
  padding: 20px;
  color: #fff;
}
h1 {
  margin: 0;
} */
</style>