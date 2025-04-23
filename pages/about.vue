<template>
  <div class="w-full">
    <AboutHero></AboutHero>
    <AboutMission></AboutMission>
    
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
