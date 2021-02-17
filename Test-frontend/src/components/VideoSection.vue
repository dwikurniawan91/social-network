<template>
  <div class="container max-w-7xl p-5 w-full mt-4">
    <div class="grid grid-cols-3 gap-2">
      <div class="col-span-2">
        <div class="flex items-end text-center justify-between">
          <h2 class="text-2xl font-semibold ml-2">Videos</h2>
          <h2 class="text-xs mr-3">Browse all videos</h2>
        </div>
        <div class="grid grid-cols-3 grid-flow-col">
          <div class="col-span-2">
            <Card :data="headlineData.slice(19)" />
          </div>
          <div class="col-span">
            <div
              v-for="card in headlineData.slice(18)"
              :key="card.id"
              style="cursor: pointer"
              @click="clickMethod"
              class="gradient relative bg-white text-red-900 border overflow-hidden m-2"
            >
              <img :src="card.urlToImage" alt="" />
              <div
                class="overlay absolute bottom-0 w-full h-20 px-2 pt-8 text-left"
              >
                <div class="font-lg text-white text-sm truncate">
                  {{ card.title }}
                </div>
                <div class="flex justify-between">
                  <div class="text-gray-400 text-sm truncate">
                    Waseem arshad
                  </div>
                  <div class="text-gray-400 text-sm">1.900 views</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3 grid-flow-row">
          <div
            class="col-span"
            v-for="card in headlineData.slice(18)"
            :key="card.id"
          >
            <div
              style="cursor: pointer"
              @click="clickMethod"
              class="gradient relative bg-white text-red-900 border overflow-hidden m-2"
            >
              <img :src="card.urlToImage" alt="headline photo" />
              <div
                class="overlay absolute bottom-0 w-full h-20 px-2 pt-8 text-left"
              >
                <div class="font-lg text-white text-sm truncate">
                  {{ card.title }}
                </div>
                <div class="flex justify-between">
                  <div class="text-gray-400 text-sm truncate">
                    Waseem arshad
                  </div>
                  <div class="text-gray-400 text-sm">1.900 views</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span">
            <UploadCard />
          </div>
        </div>
      </div>

      <div class="col-span-1">
        <div class="flex items-end text-center justify-between">
          <h2 class="text-2xl font-semibold ml-2">Activity</h2>
          <h2 class="text-xs">View timeline / filter activities</h2>
        </div>
        <hr class="my-3" />
        <div>
          <ListActivity :everythingData="everythingData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from "../services/axios.js";
import Card from "./Card.vue";
import smallCard from "./smallCard.vue";
import UploadCard from "./UploadCard.vue";
import ListActivity from "./ListActivity.vue";
export default {
  components: { Card, ListActivity, UploadCard },
  props: ["cards", "icon"],
  data: function () {
    return {
      isLoading: false,
      headlineData: [],
      everythingData: [],
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    async getNews() {
      this.isLoading = true;
      const headline = apiClient.get(
        "/top-headlines?country=us&apiKey=85a63d49bb4248fcbc884d7716f53a4c"
      );
      const everything = apiClient.get(
        "/everything?q=bitcoin&apiKey=85a63d49bb4248fcbc884d7716f53a4c"
      );

      await Promise.all([headline, everything])
        .then((result) => {
          this.headlineData = result[0].data.articles;
          this.everythingData = result[1].data.articles;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.overlay {
  background: linear-gradient(0deg, black, transparent);
}
</style>