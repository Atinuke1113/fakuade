<template>
  <section class="py-24 bg-white relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="floating-grid"></div>
      <div class="animated-circles">
        <div v-for="n in 3" :key="`circle-${n}`" class="animated-circle" :style="`--delay: ${n * 2}s`"></div>
      </div>
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Section Header -->
      <div class="max-w-xl mx-auto text-center mb-20">
        <h2 class="text-5xl font-bold text-gray-900 mb-6 relative"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ opacity: 1, y: 0 }">
          Featured Events
          <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#F97316] to-[#14B8A6]"></div>
        </h2>
        <p class="text-gray-600"
           v-motion
           :initial="{ opacity: 0 }"
           :visible="{ opacity: 1, delay: 200 }">
          Join us in shaping the future of digital innovation and leadership
        </p>
      </div>

      <!-- Events Timeline -->
      <div class="max-w-6xl mx-auto">
        <div class="space-y-12">
          <!-- Event Card 1 -->
          <div class="group"
               v-motion
               :initial="{ opacity: 0, x: -50 }"
               :visible="{ opacity: 1, x: 0 }">
            <div class="grid md:grid-cols-12 gap-8 p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 bg-white border border-gray-100 relative overflow-hidden">
              <!-- Date Column -->
              <div class="md:col-span-2 flex justify-center">
                <div class="w-24 h-24 bg-gradient-to-br from-[#F97316] to-[#14B8A6] rounded-2xl p-[2px] transform group-hover:scale-110 transition-transform duration-500">
                  <div class="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center">
                    <span class="text-4xl font-bold bg-gradient-to-r from-[#F97316] to-[#14B8A6] bg-clip-text text-transparent">25</span>
                    <span class="text-sm text-gray-500">DEC 2023</span>
                  </div>
                </div>
              </div>

              <!-- Content Column -->
              <div class="md:col-span-7">
                <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#F97316] transition-colors">Digital Innovation Summit</h3>
                <p class="text-gray-600 mb-4">A transformative gathering of tech leaders and innovators discussing the future of digital governance.</p>
                <div class="flex flex-wrap items-center gap-6 text-sm">
                  <span class="flex items-center gap-2 text-gray-500">
                    <i class="fas fa-map-marker-alt text-[#F97316]"></i>
                    Tech Hub, Ado-Ekiti
                  </span>
                  <span class="flex items-center gap-2 text-gray-500">
                    <i class="fas fa-clock text-[#14B8A6]"></i>
                    09:00 AM - 04:00 PM
                  </span>
                </div>
              </div>

              <!-- Action Column -->
              <div class="md:col-span-3 flex items-center justify-center">
                <button class="relative overflow-hidden px-8 py-4 rounded-full group-hover:shadow-lg transition-all duration-300">
                  <span class="relative z-10 text-[#F97316] group-hover:text-white transition-colors duration-300">Register Now</span>
                  <div class="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#14B8A6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </div>

              <!-- Hover Effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-[#F97316]/5 to-[#14B8A6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <!-- Event Card 2 (Similar structure with different content) -->
          <!-- ... -->

          <!-- View All Events -->
          <div class="text-center mt-16"
               v-motion
               :initial="{ opacity: 0, y: 20 }"
               :visible="{ opacity: 1, y: 0, delay: 400 }">
            <button class="relative overflow-hidden px-10 py-4 rounded-full group">
              <span class="relative z-10 text-white">View All Events</span>
              <div class="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#14B8A6]"></div>
              <div class="absolute inset-0 bg-gradient-to-r from-[#14B8A6] to-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <i class="fas fa-arrow-right ml-2 relative z-10 transform group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.floating-grid {
  background-image: linear-gradient(to right, rgba(249, 115, 22, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(249, 115, 22, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  animation: floatGrid 20s linear infinite;
}

.animated-circles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.animated-circle {
  position: absolute;
  width: 300px;
  height: 300px;
  border: 1px solid rgba(249, 115, 22, 0.1);
  border-radius: 50%;
  animation: pulseCircle 4s ease-out infinite;
  animation-delay: var(--delay);
}

@keyframes floatGrid {
  0% { transform: translateY(0); }
  100% { transform: translateY(-40px); }
}

@keyframes pulseCircle {
  0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
  50% { opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
}
</style>