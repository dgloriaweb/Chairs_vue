<template>
  <ul>
    <li v-for="chair in chairs" :key="chair.id">
      <Chair :chair="chair" />
    </li>
  </ul>
</template>

<script>
import Chair from './Chair.vue'
export default {
  name: 'ChairsList',
  data() {
    return {
      chairs: [],
    }
  },
  created: function() {
    this.fetchData()
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          // `https://babiwes.com/lchairs_v7/public/api/chairs`
          'http://localhost/chair_api/public/api/chairs'
        )
        const chairs = await res.json()
        this.chairs = chairs.data
      } catch (e) {
        console.log(e)
      }
    },
  },
  components: {
    Chair,
  },
}
</script>

<style scoped>
ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  row-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
}
</style>
