<template>
    <section class="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-20">
        <div class="grid grid-cols-8 h-full">
          <div v-for="n in 8" :key="n" class="border-r border-white/10"></div>
        </div>
      </div>
  
      <div class="container mx-auto px-4 relative">
        <!-- Section Header -->
        <div class="max-w-xl mx-auto text-center mb-20">
          <h2 class="text-5xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-6"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0 }">
            Featured Events
          </h2>
          <p class="text-gray-400"
             v-motion
             :initial="{ opacity: 0 }"
             :visible="{ opacity: 1, delay: 200 }">
            Join us in shaping the future of digital innovation and leadership
          </p>
        </div>
  
        <!-- Events Timeline -->
        <div class="max-w-5xl mx-auto">
          <div class="space-y-12">
            <!-- Event 1 -->
            <div class="group relative"
                 v-motion
                 :initial="{ opacity: 0, x: -50 }"
                 :visible="{ opacity: 1, x: 0 }">
              <div class="flex-col lg:flex md:flex items-center gap-8 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-500 border border-white/10">
                <!-- Date Box -->
                <div class="flex-shrink-0 w-24 h-24 mb-5 bg-gradient-to-br from-[#F97316] to-[#14B8A6] rounded-lg p-[1px]">
                  <div class="w-full h-full bg-black rounded-lg flex flex-col items-center justify-center">
                    <span class="text-4xl font-bold text-white">25</span>
                    <span class="text-sm text-gray-400">DEC 2023</span>
                  </div>
                </div>
                
                <!-- Event Details -->
                <div class="flex-grow">
                  <h3 class="text-2xl font-bold text-white mb-2">Digital Innovation Summit</h3>
                  <p class="text-gray-400 mb-4">A transformative gathering of tech leaders and innovators discussing the future of digital governance.</p>
                  <div class="flex items-center gap-6 text-sm">
                    <span class="flex items-center gap-2 text-gray-400">
                      <i class="fas fa-map-marker-alt text-[#F97316]"></i>
                      Tech Hub, Ado-Ekiti
                    </span>
                    <span class="flex items-center gap-2 text-gray-400">
                      <i class="fas fa-clock text-[#14B8A6]"></i>
                      09:00 AM - 04:00 PM
                    </span>
                  </div>
                </div>
  
                <!-- Action Button -->
                <div class="flex-shrink-0">
                  <button class="px-6 py-3 mt-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 group-hover:scale-105">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
  
            <!-- Event 2 -->
            <div class="group relative"
                 v-motion
                 :initial="{ opacity: 0, x: -50 }"
                 :visible="{ opacity: 1, x: 0, delay: 200 }">
              <div class="flex-col lg:flex md:flex items-center gap-8 p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-500 border border-white/10">
                <div class="flex-shrink-0 w-24 h-24 mb-5 bg-gradient-to-br from-[#14B8A6] to-[#F97316] rounded-lg p-[1px]">
                  <div class="w-full h-full bg-black rounded-lg flex flex-col items-center justify-center">
                    <span class="text-4xl font-bold text-white">15</span>
                    <span class="text-sm text-gray-400">JAN 2024</span>
                  </div>
                </div>
                
                <div class="flex-grow">
                  <h3 class="text-2xl font-bold text-white mb-2">Youth Tech Workshop</h3>
                  <p class="text-gray-400 mb-4">Hands-on workshop empowering young minds with essential digital skills and innovation techniques.</p>
                  <div class="flex items-center gap-6 text-sm">
                    <span class="flex items-center gap-2 text-gray-400">
                      <i class="fas fa-map-marker-alt text-[#14B8A6]"></i>
                      Innovation Center
                    </span>
                    <span class="flex items-center gap-2 text-gray-400">
                      <i class="fas fa-clock text-[#F97316]"></i>
                      10:00 AM - 03:00 PM
                    </span>
                  </div>
                </div>
  
                <div class="flex-shrink-0">
                  <button class="px-6 py-3 mt-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 group-hover:scale-105">
                    Join Workshop
                  </button>
                </div>
              </div>
            </div>
  
            <!-- View All Events -->
            <div class="text-center"
                 v-motion
                 :initial="{ opacity: 0, y: 20 }"
                 :visible="{ opacity: 1, y: 0, delay: 400 }">
              <button class="px-8 py-4 bg-gradient-to-r from-[#F97316] to-[#14B8A6] rounded-full text-white hover:shadow-lg transition-all duration-300 group">
                View All Events
                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>