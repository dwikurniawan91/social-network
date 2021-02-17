<template>
  <figure
    v-for="list in everythingData.slice(13)"
    :key="list.id"
    class="md:flex rounded-xl p-0 md:p-0 my-3"
    style="cursor: pointer"
    @click="clickMethod"
  >
    <img
      class="w-18 h-18 md:w-20 md:rounded-none object-cover"
      :src="list.urlToImage"
      alt=""
      width="384"
      height="512"
    />
    <div class="pt-0 md:mx-2 text-center md:text-left space-y-4">
      <figcaption class="font-medium">
        <div class="text-cyan-600">
          {{ list.author }}<span class="text-xs text-gray-300"> connected</span>
        </div>
        <div class="text-sm text-gray-400">
          <h4 class="">{{ list.title }}</h4>
        </div>
        <div class="flex">
          <svg
            class="text-white h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clip-rule="evenodd"
            />
          </svg>
          <h4 class="text-xs text-gray-300 mx-1">2 seconds ago</h4>
        </div>
      </figcaption>
    </div>
  </figure>
</template>

<script>
export default {
  props: ["everythingData"],
};
</script>

<style>
</style>