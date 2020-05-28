<template>
  <transition name="fade">
    <div class="chair-wrapper" :style="styles">
      <div class="chair-info">
        <h1>{{ chair.name }}</h1>
        <h3>Price: </h3>
        <p>{{ chair.price }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      chair: {},
    }
  },
  created: function() {
    this.fetchData()
  },
  
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          // `https://babiwes.com/lchairs_v7/public/api/chairs/${this.$route.params.id}`
          `http://localhost/chair_api/public/api/chairs/${this.$route.params.id}`
        )
        const chair = await res.json()
        this.chair = chair.data
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style scoped>
.chair-wrapper {
  position: relative;
  padding-top: 50vh;
  background-size: cover;
}
.chair-info {
  background: #fff;
  color: #222;
  padding: 2rem 10%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
