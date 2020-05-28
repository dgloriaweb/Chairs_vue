<template>
  <router-link :to="chairPath">
    <p>{{ chair.name }}</p>

    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-full md:w-1/2 sm:w-full p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden"  style="padding:0.5rem;">
              <!-- <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="{{ chair.img_url }}"
              /> -->
              <!-- <img :src="posterImage" :alt="chair.name"  class="object-cover object-center w-full h-full block" style="max-height:90%;margin:auto"/> -->
              <img :src="posterImage" :alt="chair.name"  />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                TASK CHAIR
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                {{ chair.name }}
              </h2>
              <p class="mt-1">£{{ chair.price }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  props: ['chair'],
  computed: {
        posterImage: function() {
      return `${this.chair.img_url}`;
    },
    chairPath: function() {
      return `/chair/${this.chair.id}`
    },
  },
}
</script>

<style scoped>
img {
  box-shadow: 0 0 35px #111;
}
</style>
