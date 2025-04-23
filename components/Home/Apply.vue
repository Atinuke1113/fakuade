<template>
    <section class="py-20 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <!-- Animated Title -->
          <h2 
            class="text-4xl md:text-5xl font-bold mb-6"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
          >
            Empowering Dreams Through
            <span class="text-accent block mt-2">
              {{ currentWord }}
            </span>
          </h2>
  
          <!-- Description -->
          <p 
            class="text-lg md:text-xl text-gray-800 mb-10"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="200"
          >
            Join us in creating opportunities and transforming lives through education. 
            Your journey towards excellence starts here.
          </p>
  
          <!-- CTA Buttons -->
          <div 
            class="flex flex-col sm:flex-row justify-center gap-4"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }"
            :delay="400"
          >
          <NuxtLink to="/scholarship">
            <button class="px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-accent/90 transform hover:scale-105 transition-all duration-300">
              Apply Now
            </button>
          </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const words = ['Education', 'Innovation', 'Leadership', 'Excellence']
  const currentWord = ref(words[0])
  let currentIndex = 0
  
  onMounted(() => {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length
      currentWord.value = words[currentIndex]
    }, 3000)
  })
  </script>
  
  <style scoped>
  .text-accent {
    transition: all 0.5s ease;
  }
  </style>