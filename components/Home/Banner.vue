<template>
    <div class="relative w-full h-24 overflow-hidden bg-orange-600">
      <!-- First Moving Strip -->
      <div class="absolute top-2 w-full py-4 flex items-center"
           :style="{ transform: `translateX(${position1}px)` }">
        <div class="flex items-center gap-6 whitespace-nowrap">
          <template v-for="n in 10" :key="n">
            <span class="text-white text-xl font-bold">Innovation</span>
            <span class="text-white text-xl mx-2">+</span>
            <span class="text-white text-xl font-bold">Leadership</span>
            <span class="text-white text-xl mx-2">+</span>
            <span class="text-white text-xl font-bold">Education</span>
            <span class="text-white text-xl mx-2">+</span>
            <span class="text-white text-xl font-bold">Transformation</span>
            <span class="text-white text-xl mx-2">+</span>
            <span class="text-white text-xl font-bold">Legacy</span>
            <span class="text-white text-xl mx-2">+</span>
          </template>
        </div>
      </div>
      
    </div>
  </template>
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const position1 = ref(0)
  const position2 = ref(0)
  let animationFrame
  const speed = 1
  
  function animate() {
    position1.value -= speed
    position2.value += speed
  
    // Reset positions when they go too far
    if (position1.value <= -2000) position1.value = 0
    if (position2.value >= 2000) position2.value = 0
  
    animationFrame = requestAnimationFrame(animate)
  }
  
  onMounted(() => {
    animate()
  })
  
  onUnmounted(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  })
  </script>
  
  <style scoped>
  .overflow-hidden {
    mask-image: linear-gradient(
      90deg,
      transparent 0%,
      orange 5%,
      orange 95%,
    );
  }
  </style>