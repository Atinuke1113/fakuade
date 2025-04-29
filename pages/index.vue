<template>
  <div class="w-full">
    <HomeHero></HomeHero>
    <HomeBanner></HomeBanner>
    <HomeCta></HomeCta>
    <HomeVision></HomeVision>
    <HomeQuotewall></HomeQuotewall>
    <HomeScholarship></HomeScholarship>
    <HomeEvents></HomeEvents>
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
