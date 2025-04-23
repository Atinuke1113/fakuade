<template>
  <div class="w-full">
    <HomeHero></HomeHero>
    <HomeApply></HomeApply>
    <HomeScholarship></HomeScholarship>
    <HomeGallery></HomeGallery>
    <HomeFaq></HomeFaq>
    
    
    

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
