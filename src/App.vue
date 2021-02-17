<template>
  <div class="container max-w-7xl mx-auto bg-red-900 text-white">
    <Navbar />
    <VideoSection />
    <PeopleSection />
    <Footer />
  </div>
</template>

<script >
import Navbar from "./components/Navbar.vue";
import VideoSection from "./components/VideoSection.vue";
import PeopleSection from "./components/PeopleSection.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, VideoSection, PeopleSection, Footer },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #7f1d1d;
}
</style>