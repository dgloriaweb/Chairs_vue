<template>
  <router-link :to="chairPath">
    <p>{{ chair.name }}</p>

    <section class="text-gray-700 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full"  style="width:100%">
            <a class="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p class="mt-1">$16.00</p>
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
