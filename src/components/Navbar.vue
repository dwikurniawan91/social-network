<template>
  <div
    class="container bg-red-900 sticky top-0 z-40 lg:z-50 max-w-7xl pt-4 w-full"
  >
    <div class="bg-red-900 w-full max-w-7xl mx-auto flex">
      <div class="grid grid-cols-5 grid-flow-col items-center">
        <div class="col-span-1">
          <div class="text-center">
            <h1 class="text-3xl text-white">
              <span class="font-semibold">Social</span>Network
            </h1>
          </div>
        </div>
        <div class="col-span-4">
          <div class="relative mx-5 text-gray-600 items-center">
            <input
              class="border-3 w-full border-gray-300 bg-white h-10 px-5 pr-16 rounded-sm text-sm focus:outline-none"
              type="find"
              name="find"
              placeholder="Find"
            />
            <button type="submit" class="absolute right-0 bottom-2.5 mt-5 mr-4">
              <svg
                class="text-red-900 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style="enable-background: new 0 0 56.966 56.966"
                xml:space="preserve"
                width="512px"
                height="512px"
              >
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="col-span-5 flex w-full justify-end">
          <div class="flex items-center mx-2 text-red-900 text-center">
            <button class="flex bg-yellow-100 p-2">
              <svg
                class="text-red-900 h-4 w-4 fill-current m-1"
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
              Upload
            </button>
          </div>
          <div class="flex items-center mx-4 w-4">
            <button class="flex bg-yellow-100 p-3">
              <svg
                class="text-red-900 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <h4 class="m-2 leading-none text-white">
              Waseem <span class="text-sm">arshad</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-red-900 pt-4">
      <hr />
      <div class="flex justify-evenly m-2">
        <a class="active" href="#videos">Videos</a>
        /
        <a href="#">People</a>
        /
        <a href="#">Documents</a>
        /
        <a class="active" href="#">Events</a>
        /
        <a href="#">Communities</a>
        /
        <a href="#">Favorites</a>
        /
        <a href="#">Channels</a>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>