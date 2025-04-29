<template>
    <section class="relative h-screen bg-[#0A0A0A] overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="relative w-full h-full">
          <div class="absolute inset-0 bg-gradient-radial from-[#F97316]/20 via-transparent to-transparent"></div>
          <div v-for="n in 50" :key="n" 
               class="star"
               :style="{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 animationDelay: `${Math.random() * 3}s`,
                 animationDuration: `${3 + Math.random() * 3}s`
               }">
          </div>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="container mx-auto h-full relative px-4">
        <div class="flex flex-col sm:flex-row h-full ">
          <!-- Left Content -->
          <div class="w-full lg:w-1/2 flex flex-col justify-center lg:pr-12 pt-20 lg:pt-0">
            <TransitionGroup name="fade-slide">
              <div v-if="currentSlide === 1" key="slide1" class="text-center lg:text-left">
               <h1 class="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 lg:mb-8 leading-tight split-chars"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 800, stagger: 20 } }">
                 A Leader Rooted in Vision &
                  <span class="text-orange-600">Guided by Value</span>
                </h1>
                <p class="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed"
                   v-motion
                   :initial="{ opacity: 0, y: 20 }"
                   :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 500 } }">
                   Leadership is more than a title — it’s a lifelong calling. Seun Fakuade has answered that call with clarity, courage, and conviction. As a changemaker and commissioner, he champions innovation, transparency, and equity as pillars for public service.
                </p>
              </div>
              <div v-else key="slide2" class="text-center lg:text-left">
                <h1 class="text-5xl md:text-6xl lg:text-8xl font-bold text-white mb-6 lg:mb-8 leading-tight split-chars"
                    v-motion
                    :initial="{ opacity: 0 }"
                    :enter="{ opacity: 1, transition: { duration: 800, stagger: 20 } }">
                 A Visionary Man Building
                  <span class="text-[#14B8A6]">Legacy of Impact</span>
                </h1>
                <p class="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0  leading-relaxed"
                   v-motion
                   :initial="{ opacity: 0, y: 20 }"
                   :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 500 } }">
                   In every role, he has championed innovation as a tool for equity and opportunity. His vision is not just to lead, but to inspire leadership in others — especially the young minds shaping tomorrow.
                </p>
              </div>
            </TransitionGroup>
          </div>
  
          <!-- Right Content -->
          <div class="w-full lg:w-1/2 flex items-center mt-8 lg:mt-0">
          <div class="relative w-full h-[40vh] md:h-[50vh] lg:h-[80vh]">
            <TransitionGroup name="morph">
              <div v-if="currentSlide === 1" key="image1" class="absolute inset-0 px-4 lg:px-0">
                <div class="relative w-full h-full morph-container">
                  <img src="/images/gallery6.jpg" alt="Digital Innovation" 
                       class="w-full h-full object-cover rounded-2xl">
                  <div class="absolute inset-0 bg-gradient-to-r from-[#F97316]/30 to-transparent rounded-2xl"></div>
                </div>
              </div>
              <div v-else key="image2" class="absolute inset-0 px-4 lg:px-0">
                <div class="relative w-full h-full morph-container">
                  <img src="/images/seun.jpg" alt="Leadership" 
                       class="w-full h-full object-cover rounded-2xl">
                  <div class="absolute inset-0 bg-gradient-to-r from-[#14B8A6]/30 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </TransitionGroup>
          </div>
        </div>
        </div>
      </div>

  
      
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const currentSlide = ref(1)
  let interval
  
  const switchSlide = () => {
    currentSlide.value = currentSlide.value === 1 ? 2 : 1
  }
  
  onMounted(() => {
    interval = setInterval(switchSlide, 3000)
  })
  
  onUnmounted(() => {
    clearInterval(interval)
  })
  </script>
  
  <style scoped>
  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    opacity: 0;
    animation: twinkle linear infinite;
  }
  
  @keyframes twinkle {
    0%, 100% { opacity: 0; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.5); }
  }
  
  .morph-enter-active,
  .morph-leave-active {
    transition: all 0.8s ease;
  }
  
  .morph-enter-from {
    opacity: 0;
    transform: scale(0.8) rotate(-10deg);
  }
  
  .morph-leave-to {
    opacity: 0;
    transform: scale(0.8) rotate(10deg);
  }
  
  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.8s ease;
  }
  
  .fade-slide-enter-from {
    opacity: 0;
    transform: translateX(-30px);
  }
  
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
  
  .split-chars {
    opacity: 0;
    animation: fadeInUp 0.8s forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .bg-gradient-radial {
    background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);
  }
  </style>