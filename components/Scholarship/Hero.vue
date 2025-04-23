<template>
    <div class="w-full overflow-hidden">
      <!-- Hero Section -->
      <section class="relative overflow-hidden min-h-[50vh] bg-cover bg-center bg-no-repeat" 
             style="background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/images/gallery2.jpg');">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0">
          <div class="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -top-10 -left-10"
               v-motion
               :initial="{ opacity: 0, scale: 0.5 }"
               :visible="{ opacity: 0.6, scale: 1 }"
               :delay="200">
          </div>
          <div class="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-0 right-0"
               v-motion
               :initial="{ opacity: 0, scale: 0.5 }"
               :visible="{ opacity: 0.6, scale: 1 }"
               :delay="400">
          </div>
        </div>
  
        <div class="container mx-auto px-4 relative py-24 pb-32">
          <div class="max-w-4xl mx-auto text-center">
            <!-- Main Title -->
            <h1 
              class="text-4xl md:text-6xl font-bold text-white mt-16"
              v-motion
              :initial="{ opacity: 0, y: 50 }"
              :visible="{ opacity: 1, y: 0 }">
              Empowering Future Leaders
              <span class="block text-accent mt-2 mb-10">Through Education</span>
            </h1>
  
            <!-- Description -->
            <p 
              class="text-xl text-gray-300 mb-8"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0 }"
              :delay="200">
              The Seun Fakuade Scholarship Fund is more than just financial aid - 
              it's a gateway to opportunities, mentorship, and a brighter future.
            </p>
  
            <!-- CTA Buttons -->
            <div 
              class="flex flex-col sm:flex-row justify-center gap-4"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0 }"
              :delay="600">
              <button class="px-8 py-4 bg-accent text-white rounded-lg hover:bg-accent/90 transform hover:scale-105 transition-all duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
  
        <!-- Animated Wave -->
        <div class="absolute bottom-0 left-0 right-0">
          <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="wave-parallax">
              <use href="#wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
              <use href="#wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use href="#wave" x="48" y="7" fill="rgba(255,255,255,0.1)" />
            </g>
          </svg>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  const stats = [
    { value: '500+', label: 'Students Supported' },
    { value: '$2M+', label: 'Scholarships Awarded' },
    { value: '95%', label: 'Success Rate' },
    { value: '50+', label: 'Partner Universities' }
  ]
  </script>
  
  <style scoped>
  .waves {
  width: 100%;
  height: 100px;
  min-height: 100px;
  max-height: 150px;
  position: relative;
  z-index: 1;
}
  
  .wave-parallax use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
  }
  .wave-parallax use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; }
  .wave-parallax use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; }
  .wave-parallax use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; }
  .wave-parallax use:nth-child(4) { animation-delay: -5s; animation-duration: 20s; }
  
  @keyframes move-forever {
    0% { transform: translate3d(-90px,0,0); }
    100% { transform: translate3d(85px,0,0); }
  }
  </style>