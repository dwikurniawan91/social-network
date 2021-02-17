<template>
  <div
    style="cursor: pointer"
    @click="clickMethod"
    class="gradient relative bg-white text-red-900 border overflow-hidden m-2"
  >
    <img
      src="https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
      alt=""
    />
    <div class="overlay absolute bottom-0 w-full h-full">
      <div class="flex h-full items-center justify-center top-20">
        <div class="w-8 h-8 rounded-full border items-center text-center m-2">
          <svg
            class="text-white h-4 w-4 mx-auto my-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <span class="font-lg text-white text-sm text-center"
          >Upload your own video</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["icon"],
  methods: {
    clickMethod() {},
  },
};
</script>

<style scoped>
.overlay {
  background: #7f1d1d;
}
</style>