<template>
  <transition name="fade">
    <div class="chair-wrapper" :style="styles">
      <div class="chair-info">
        <h1>{{ chair.name }}</h1>
        <h3>Price:</h3>
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
  computed: {
    styles() {
      return {
        background: `url(${this.chair.img_url}) no-repeat `,
      }
    },
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(
          `https://babiwes.com/chairs_api/public/api/chairs/${this.$route.params.id}`
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
}
.chair-info {
  background: #fff;
  color: #222;
  padding: 2rem 10%;
  opacity:0.6;
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
