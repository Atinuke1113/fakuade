<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden items-center relative">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div v-for="n in 3" :key="`circle-${n}`" 
           class="animated-circle"
           :style="`--delay: ${n * 2}s`">
      </div>
      <div class="floating-dots"></div>
    </div>

    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-28 items-center">
          <!-- Enhanced Image Section -->
          <div class="relative group"
               v-motion
               :initial="{ opacity: 0, x: -50 }"
               :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }">
            <div class="rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
              <img 
                src="/images/gallery6.jpg" 
                alt="Seun Fakuade"
                class="w-full h-[500px] sm:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
              >
              <!-- Image Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <!-- Animated Background Elements -->
            <div class="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#F97316] to-[#14B8A6] rounded-2xl -z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"></div>
            <div class="absolute -top-6 -left-6 w-32 h-32 border-2 border-[#F97316] rounded-2xl -z-10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"></div>
          </div>

          <!-- Enhanced Content Section -->
          <div class="space-y-6"
               v-motion
               :initial="{ opacity: 0, x: 50 }"
               :visible="{ opacity: 1, x: 0, transition: { duration: 800, delay: 200 } }">
            <div>
              <h2 class="text-3xl md:text-4xl font-bold mb-4 relative">
                Leadership Philosophy
                <span class="absolute -left-6 top-1/2 w-4 h-4 bg-[#F97316] rounded-full transform -translate-y-1/2 animate-pulse"></span>
              </h2>
              <div class="w-32 h-2 bg-[#F97316] rounded-full mb-8 transform origin-left transition-transform duration-500 hover:scale-x-110"></div>
            </div>

            <p class="text-gray-600 text-lg leading-relaxed hover:text-gray-800 transition-colors duration-300">
              In the rapidly evolving landscape of digital innovation, my leadership philosophy centers on fostering an ecosystem where technology serves as a catalyst for societal advancement. I believe in leading with vision while remaining grounded in practicality, ensuring that every initiative we undertake creates tangible impact for our communities.
            </p>

            <p class="text-gray-600 text-lg leading-relaxed hover:text-gray-800 transition-colors duration-300">
              My approach combines strategic foresight with collaborative execution, emphasizing the importance of building strong partnerships and empowering teams to drive transformative change. By balancing innovation with inclusivity, we're creating a digital future that leaves no one behind, while setting new standards for public service excellence.
            </p>

            <NuxtLink 
              to="/about" 
              class="inline-flex items-center gap-2 text-[#F97316] hover:text-[#E97316] font-semibold text-lg group mt-6 relative overflow-hidden">
              <span class="relative z-10">Read Full Story</span>
              <i class="fas fa-arrow-right transition-all duration-300 group-hover:translate-x-1"></i>
              <div class="absolute bottom-0 left-0 w-full h-0.5 bg-[#F97316] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animated-circle {
  position: absolute;
  border: 2px solid rgba(249, 115, 22, 0.1);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  animation: circleAnimation 10s linear infinite;
  animation-delay: var(--delay);
}

.floating-dots {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: floatingDotsAnimation 20s linear infinite;
}

@keyframes circleAnimation {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
  }
}

@keyframes floatingDotsAnimation {
  0% { transform: translateY(0); }
  100% { transform: translateY(-40px); }
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .animated-circle {
    width: 150px;
    height: 150px;
  }
  
  .floating-dots {
    background-size: 30px 30px;
  }
}

@media (max-width: 640px) {
  .gap-28 {
    gap: 3rem;
  }
}
</style>