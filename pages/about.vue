<template>
  <div class="w-full">
    <HomeCoverage></HomeCoverage>
    <HomeGateway></HomeGateway>
    <HomeSnapshot></HomeSnapshot>
    <AboutStories></AboutStories>
    <HomeGallery></HomeGallery>
    <AboutFuture></AboutFuture>
    
    
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "default",
      // middleware: ["authguard"],
    });
  },
  data: () => ({}),
  mounted() {},
};
</script>

<style></style>
