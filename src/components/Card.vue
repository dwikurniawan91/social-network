<template>
  <div
    v-for="card in data"
    :key="card.id"
    style="cursor: pointer"
    @click="clickMethod"
    class="gradient relative bg-white text-red-900 border overflow-hidden m-2"
  >
    <img
      src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      alt=""
    />
    <div class="overlay absolute bottom-0 w-full h-20 px-2 pt-6 text-left">
      <div class="font-lg text-white text-sm truncate">
        {{ card.title }}
      </div>
      <div class="flex justify-between">
        <div class="text-gray-400 text-sm truncate">Waseem arshad</div>
        <div class="text-gray-400 text-sm">1.900 views</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {
    clickMethod() {},
  },
};
</script>

<style scoped>
.overlay {
  background: linear-gradient(0deg, black, transparent);
}
</style>