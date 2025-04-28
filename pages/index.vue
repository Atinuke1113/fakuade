<template>
  <div class="w-full">
    <HomeHero></HomeHero>
    <HomeBanner></HomeBanner>
    <HomeScholarship></HomeScholarship>
    <HomeGallery></HomeGallery>
    <HomeFaq></HomeFaq>
    <HomeApply></HomeApply>
    
    
    

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
