<template>
    <div class="w-full">
     <ScholarshipHero></ScholarshipHero>
     <ScholarshipCriteria></ScholarshipCriteria>
     <ScholarshipApplication></ScholarshipApplication>
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
  