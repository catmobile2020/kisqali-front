<template>
  <div class="homepage">
    <section class="">
      <Header />
    </section>
    <section class="">
      <landingPage />
    </section>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import landingPage from "../components/landingPage/landingPage.vue";
export default {
  name: "landingPages",
  components: {
    Header,
    landingPage,
  },
};
</script>
