<template>
    <div class="max-w-6xl mx-auto p-8 mt-5 overflow-hidden">
      <!-- Header -->
      <div class="flex items-center gap-8 mb-20"
         v-motion
         :initial="{ opacity: 0, x: -50 }"
         :visible="{ opacity: 1, x: 0 }"
         :delay="300">
        <!-- Color Bars -->
        <div class="space-y-2">
          <div class="h-4 w-20 sm:h-4 sm:w-16 bg-[#F97316] rounded-r-full"></div>
          <div class="h-4 w-12 bg-[#14B8A6] rounded-r-full"></div>
          <div class="h-4 w-16 bg-gradient-to-r from-[#F97316] to-[#14B8A6] rounded-r-full"></div>
        </div>
        
        <div class="space-y-2">
          
          <h3 class="text-3xl font-bold text-gray-600 animate__animated animate__fadeInRight animate__delay-1s">Mission & Vision</h3>
          <p class="animate__animated animate__fadeInRight animate__delay-1s text-gray-500 max-w-md">
            Driving digital transformation and innovation in Ekiti State through clear vision and strategic implementation
          </p>
        </div>
      </div>
  
      <!-- Cards -->
      <div class="space-y-8">
        <!-- Vision Card -->
        <div class="flex items-start gap-6 max-w-2xl mx-auto"
           v-motion
           :initial="{ opacity: 0, x: -100 }"
           :visible="{ opacity: 1, x: 0 }"
           :delay="300"
           :threshold="0.3">
          <div class="w-10 h-10 bg-[#F97316] rounded-lg flex items-center justify-center flex-shrink-0">
            <i class="fas fa-eye text-white text-2xl"></i>
          </div>
          <div class="bg-white shadow-xl rounded-lg p-6 flex-grow">
            <h3 class="text-xl font-bold mb-2 text-[#F97316]">Vision</h3>
            <p class="text-gray-600">
              To pioneer transformative digital solutions that empower communities, bridge technological divides, and establish Ekiti State as a leading hub for innovation and sustainable development in Africa.
            </p>
          </div>
        </div>
  
        <!-- Mission Card -->
        <div class="flex items-start gap-6 max-w-2xl mx-auto"
           v-motion
           :initial="{ opacity: 0, x: -100 }"
           :visible="{ opacity: 1, x: 0 }"
           :delay="300"
           :threshold="0.3">
          <div class="w-10 h-10 bg-[#14B8A6] rounded-lg flex items-center justify-center flex-shrink-0">
            <i class="fas fa-flag text-white text-2xl"></i>
          </div>
          <div class="bg-white shadow-xl rounded-lg p-6 flex-grow">
            <h3 class="text-xl font-bold mb-2 text-[#14B8A6]">Mission</h3>
            <p class="text-gray-600">
              To drive digital transformation through innovative policies, strategic partnerships, and inclusive technologies that enhance public service delivery, foster economic growth, and improve the quality of life for all citizens.
            </p>
          </div>
        </div>
  
        <!-- Objectives Card -->
        <div class="flex items-start gap-6 max-w-2xl mx-auto"
           v-motion
           :initial="{ opacity: 0, x: -100 }"
           :visible="{ opacity: 1, x: 0 }"
           :delay="300"
           :threshold="0.3">
          <div class="w-10 h-10 bg-gradient-to-r from-[#F97316] to-[#14B8A6] rounded-lg flex items-center justify-center flex-shrink-0">
            <i class="fas fa-bullseye text-white text-2xl"></i>
          </div>
          <div class="bg-white shadow-xl rounded-lg p-6 flex-grow">
            <h3 class="text-xl font-bold mb-2 bg-gradient-to-r from-[#F97316] to-[#14B8A6] text-transparent bg-clip-text">
              Objectives
            </h3>
            <ul class="text-gray-600 space-y-2">
              <li>• Implement cutting-edge digital infrastructure</li>
              <li>• Foster innovation and technological advancement</li>
              <li>• Enhance digital literacy and skills development</li>
              <li>• Promote inclusive digital governance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .shadow-xl {
    box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.1);
  }
  </style>