<template>
  <div class="relative min-h-screen w-full overflow-hidden">
    <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover z-0">
    <source src="/images/video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    <!-- Dynamic Background -->
    <div class="absolute inset-0">
      <div class="grid-pattern"></div>
      <div class="gradient-overlay"></div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 relative min-h-screen flex items-center">
      <div class="grid grid-cols-12 gap-8">
        <!-- Left Content -->
        <div class="col-span-5 relative z-10">
          <div 
            v-motion
            :initial="{ opacity: 0, x: -50 }"
            :enter="{ opacity: 1, x: 0, transition: { duration: 1000 } }"
            class="space-y-8"
          >
            <h1 
              class="relative text-9xl sm:4xl xs:4xl font-bold leading-none"
              v-motion
              :initial="{ opacity: 0, x: -50 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 1000 } }"
            >
              <span class="stroke-text">SEUN</span><br>
              <span class="text-orange-600 stroke-text-orange">FAKUADE</span><br>
              
              
              <!-- Text Shadow Layer -->
              <div class="absolute -left-1 top-0 opacity-10 pointer-events-none">
                <span class="text-white">SEUN</span><br>
                <span class="text-white">FAKUADE</span><br>
                
              </div>
            </h1>
            <p class="text-gray-400 text-lg xs-sm sm-sm">A Leader Rooted in Vision, Guided by Values.</p>
           
          </div>
        </div>
       
      </div>

    
    </div>

    <!-- Animated Lines -->
    <div class="lines-animation">
      <div v-for="n in 5" :key="`line-${n}`" class="line"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const images = [
  '/images/portfolio1.jpg',
  '/images/portfolio2.jpg',
  '/images/portfolio3.jpg'
]

const currentIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 5000)
})
</script>

<style scoped>
.grid-pattern {
  background-image: radial-gradient(#333 1px, transparent 1px);
  background-size: 30px 30px;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  animation: patternMove 20s linear infinite;
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #111 0%, transparent 100%);
}

.lines-animation {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.line {
  position: absolute;
  width: 1px;
  height: 100%;
  background: linear-gradient(to bottom, transparent, #ff6b00, transparent);
  animation: lineMove 8s linear infinite;
  opacity: 0;
}

.line:nth-child(1) { left: 20%; animation-delay: 0s; }
.line:nth-child(2) { left: 40%; animation-delay: 2s; }
.line:nth-child(3) { left: 60%; animation-delay: 4s; }
.line:nth-child(4) { left: 80%; animation-delay: 6s; }
.line:nth-child(5) { left: 90%; animation-delay: 8s; }

.stroke-text {
  -webkit-text-stroke: 2px white;
  color: transparent;
  text-shadow: 5px 5px 15px rgba(255, 255, 255, 0.1);
}

.stroke-text-orange {
  -webkit-text-stroke: 2px #ff6b00;
  color: transparent;
  text-shadow: 5px 5px 15px rgba(255, 107, 0, 0.2);
}

@keyframes lineMove {
  0% { transform: translateY(-100%); opacity: 0; }
  20% { opacity: 0.5; }
  80% { opacity: 0.5; }
  100% { transform: translateY(100%); opacity: 0; }
}

@keyframes patternMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(30px); }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.8s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: scale(1.1);
}

.slide-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>