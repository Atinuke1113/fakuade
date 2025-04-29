<template>
  <section class="py-20 relative h-screen bg-black overflow-hidden">
    <!-- Background Video -->
    <div class="absolute inset-0 opacity-70">
      <video 
        class="w-full h-full object-cover"
        autoplay 
        muted 
        loop 
        :src="'/images/video.mp4'"
      ></video>
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
    </div>

   

    <!-- Floating Images -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
  <div class="relative w-full h-full">
    <div v-for="(image, index) in floatingImages" 
         :key="index"
         class="floating-image absolute"
         :style="{
           top: `${image.top}%`,
           right: `${image.right}%`,
           zIndex: image.zIndex,
           animationDelay: `${index * 3}s`
         }">
      <img 
        :src="`https://source.unsplash.com/800x600/?videography,${index}`" 
        :alt="`Video Production ${index + 1}`" 
        class="w-48 h-32 object-cover rounded-lg shadow-2xl"
      >
    </div>
  </div>
</div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 h-full relative z-10">
      <div class="flex flex-col justify-center h-full max-w-4xl">
        <h1 class="text-7xl md:text-8xl font-serif text-white mb-8"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0 }">
         Hon. Seun Fakuade
        </h1>
        <div class="space-y-4"
             v-motion
             :initial="{ opacity: 0 }"
             :enter="{ opacity: 1, transition: { delay: 500 } }">
          <p class="text-xl text-gray-300">A Leader Rooted in Vision,<span class="text-orange-600"> Guided by Values</span></p>
          <p class="text-lg text-gray-400 max-w-xl">
            Seun Fakuade stands at the intersection of innovation and leadership —<br>
            A man with a mission to transform not just systems, but lives.
          </p>
          <NuxtLink to="/about">
          <button class="mt-6 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors flex items-center gap-2">
      LEARN MORE <i class="fas fa-arrow-right"></i>
          </button>
        </NuxtLink>
        </div>
      </div>

      <!-- Social Icons -->
      <div class="absolute bottom-12 right-12 flex flex-col gap-6"
           v-motion
           :initial="{ opacity: 0, x: 50 }"
           :enter="{ opacity: 1, x: 0, transition: { delay: 1000 } }">
        <a href="#" class="text-white hover:text-orange-600 transition-colors">
          <i class="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" class="text-white hover:text-orange-600 transition-colors">
          <i class="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" class="text-white hover:text-orange-600 transition-colors">
          <i class="fab fa-linkedin-in text-2xl"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const floatingImages = [
  { top: 15, right: 0, zIndex: 1 },
  { top: 35, right: 20, zIndex: 2 },
  { top: 55, right: 40, zIndex: 3 },
  { top: 75, right: 60, zIndex: 4 }
]
[
  {
    src: '/images/gallery6.jpg',
    alt: 'Portfolio 1',
    top: 60,
    duration: 15,
    delay: 0
  },
  {
    src: '/images/gallery2.jpg',
    alt: 'Portfolio 2',
    top: 70,
    duration: 18,
    delay: 2
  },
  {
    src: '/images/gallery6.jpg',
    alt: 'Portfolio 3',
    top: 70,
    duration: 40,
    delay: 2
  }
]

</script>

<style scoped>
.floating-images-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-image {
  animation: floatAcross 15s linear infinite;
  opacity: 0.8;
  transform: translateX(100vw);
}

@keyframes floatAcross {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(-100vw);
  }
}
.font-serif {
  font-family: "Bodoni Moda", serif;
}
</style>